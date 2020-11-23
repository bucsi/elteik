<?php 

require_once("storage.php");

class User {
  public $username;
  public $fullname;
  public $roles;
  private $password;

  public function __construct($username, $password, $fullname, $roles = ["user"]) {
    $this->username = $username;
    $this->password = $password;
    $this->fullname = $fullname;
    $this->roles = $roles;
  }

  public function hasRole($role) {
    return in_array($role, $this->roles);
  }

  public function verifyPassword($password) {
    return password_verify($password, $this->password);
  }
}

interface IAuthStorage {
    public function restore();
    public function register($username, $password, $fullname);
    public function authenticate($username, $password);
    public function authorize($roles = []);
    public function isAuthenticated();
    public function login($user_id);
    public function logout();
  }
  
  class UserStorage extends JsonStorage implements IAuthStorage {
    public $user = NULL;
    public $userId = NULL;
  
    public function __construct($data_file = "storage/users.json") {
      parent::__construct($data_file);
      $this->restore();
    }
  
    public function restore() {
      if (isset($_SESSION["user-id"])) {
        $user_id = $_SESSION["user-id"];
        $this->user = $this->findById($user_id);
        $this->userId = $user_id;
      }
    }
  
    public function register($username, $password, $fullname) {
      $user = [
        "username" => $username,
        "password" => password_hash($password, PASSWORD_DEFAULT),
        "fullname" => $fullname,
        "roles" => ["user"]
      ];
  
      return $this->add($user);
    }
  
    public function authenticate($username, $password) {
      $users = $this->query(function ($user) use ($username, $password) {
        return $user["username"] === $username && password_verify($password, $user["password"]);
      });
  
      if (empty($users)) {
        return FALSE;
      }
  
      $user_id = array_keys($users)[0];
      return $user_id;
    }
  
    public function isAuthenticated() {
      return !is_null($this->user);
    }
  
    public function authorize($roles = []) {
      if (!$this->isAuthenticated()) {
        return FALSE;
      }
  
      foreach ($roles as $role) {
        if (in_array($role, $this->user["roles"])) {
          return TRUE;
        }
      }
  
      return FALSE;
    }
  
    public function login($user_id) {
      $this->user = $this->findById($user_id);
      $this->userId = $user_id;
      $_SESSION["user-id"] = $user_id;
    }
  
    public function logout() {
      $this->user = NULL;
      $this->userId = NULL;
      unset($_SESSION["user-id"]);
    }
  }
  
  class UserObjectStorage extends SerializeObjectStorage implements IAuthStorage {
    public $user = NULL;
    public $userId = NULL;
  
    public function __construct($data_file = "storage/users.storage") {
      parent::__construct($data_file);
      $this->restore();
    }
  
    public function restore() {
      if (isset($_SESSION["user-id"])) {
        $user_id = $_SESSION["user-id"];
        $this->user = $this->findById($user_id);
      }
    }
  
    public function register($username, $password, $fullname) {
      $password_hash = password_hash($password, PASSWORD_DEFAULT);
      $user = new User($username, $password, $fullname);
      return $this->add($user);
    }
  
    public function authenticate($username, $password) {
      $users = $this->query(function ($user) use ($username, $password) {
        return $user->username === $username && $user->verifyPassword($password);
      });
  
      if (empty($users)) {
        return FALSE;
      }
  
      $user_id = array_keys($users)[0];
      return $user_id;
    }
  
    public function isAuthenticated() {
      return !is_null($this->user);
    }
  
    public function authorize($roles = []) {
      if (!$this->isAuthenticated()) {
        return FALSE;
      }
  
      foreach ($roles as $role) {
        if ($this->user->hasRole($role)) {
          return TRUE;
        }
      }
  
      return FALSE;
    }
  
    public function login($user_id) {
      $this->user = $this->findById($user_id);
      $this->userId = $user_id;
      $_SESSION["user-id"] = $user_id;
    }
  
    public function logout() {
      $this->user = NULL;
      $this->userId = NULL;
      unset($_SESSION["user-id"]);
    }
  }