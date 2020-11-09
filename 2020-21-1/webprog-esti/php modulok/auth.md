# Az `AuthStorage` osztályok használata

- [Újrahasználható kód](#újrahasználható-kód)
- [Rendelkezésre álló osztályok](#rendelkezésre-álló-osztályok)
- [Alapvető használat](#alapvető-használat)
- [Metódus referencia](#metódus-referencia)
  - [restore()](#restore)
  - [register($username, $password, $fullname)](#registerusername-password-fullname)
  - [authenticate($username, $password)](#authenticateusername-password)
  - [isAuthenticated()](#isauthenticated)
  - [authorize($roles = [])](#authorizeroles--)
  - [login($user_id)](#loginuser_id)
  - [logout()](#logout)

## Újrahasználható kód

<details>
  <summary>
    <code>User</code>
  </summary>

  ```php
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
  ```
</details>

<details>
  <summary>
    <code>IAuthStorage</code>,
    <code>UserStorage</code>,
    <code>UserObjectStorage</code>
  </summary>

  ```php
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
  ```

</details>

## Rendelkezésre álló osztályok

- `UserStorage`: a `JsonStorage` osztály kiterjesztése, felhasználók tömbökkel való kezelését valósítja meg JSON tárolás esetén
- `UserObjectStorage`: a `SerializeObjectStorage` osztály kiterjesztése, felhasználók osztályokkal és objektumokkal való kezelését valósítja meg "serialize" tárolás esetén
- `User`: egy felhasználót reprezentáló osztály, ezt használja a `UserObjectStorage`

## Alapvető használat

1. Hozzuk létre a felhasználók tárolásához szükséges adatfájlt (`storage/users.json` vagy `storage/users.storage`)!
2. Adjunk írási és olvasási jogot az adatfájlra a webszervernek (webprogramozás szerveren az "other" jogosultságcsoport)!
3. Indítsuk el a munkamenetet!
   ```php
   session_start();
   ```
4. Töltsük be a felhasználókat PHP-ban a megfelelő `AuthStorage` osztály példányosításával!
   ```php
   $user_storage = new UserStorage();
   ```
5. Dolgozzunk az `IAuthStorage` interfész metódusaival.

## Metódus referencia

### restore()

Visszaállítja a bejelentkezett felhasználót a munkamenetből. A konstruktor hívja meg.

### register($username, $password, $fullname)

Megadott felhasználónévvel, jelszóval és teljes névvel regisztrál egy felhasználót.

#### Paraméterek

| név         | típus  | leírás                                 |
| ----------- | ------ | -------------------------------------- |
| `$username` | string | a felhasználó azonosítója              |
| `$password` | string | a felhasználó jelszava plain text-ként |
| `$username` | string | a felhasználó teljes neve              |

#### Visszatérési érték

`$user_id`: A regisztrált új felhasználó ID-ja.

#### Példa

```php
$han_id = $user_storage->register("hansolo", "iloveyou.iknow", "Han Solo");
```

### authenticate($username, $password)

Felhasználó autentikálása, felhasználónév-jelszó kombináció ellenőrzése

| név         | típus  | leírás                                    |
| ----------- | ------ | ----------------------------------------- |
| `$username` | string | felhasználó azonosító                     |
| `$password` | string | felhasználó jelszó plain text formátumban |

#### Visszatérési érték

`string` | `FALSE`: Sikeres autentikálás esetén a megtalált felhasználó ID-ja, FALSE különben.

#### Példa

```php
$leia = $user_storage->authenticate("princessleia", "scruffylookingnerfherder11");
if ($leia) {
  print("Login successful");
} else {
  print("login failed");
}
```

### isAuthenticated()

Megnézi, hogy van-e bejelentkezve valaki.

#### Visszatérési érték

`bool` : `TRUE`, ha be van jelentkezve valaki, `FALSE` különben.

#### Példa

```php
if ($user_storage->isAuthenticated()) {
  print("Logged in: " . $user_storage->user["fullname"]);
} else {
  print("You're not logged in");
}
```

### authorize($roles = [])

Megvizsgálja, hogy a bejelentkezett felhasználó rendelkezik-e a megadott szerepkörök valamelyikével.

#### Paraméterek

| név      | típus | leírás                        |
| -------- | ----- | ----------------------------- |
| `$roles` | array | lehetséges szerepkörök tömbje |

#### Visszatérési érték

`bool`: `FALSE`, ha nincs senki bejelentkezve vagy a bejelentkezett felhasználó nem rendelkezik a megadott szerepkörök egyikével sem, `TRUE` különben.

#### Példa

```php
if(!$user_storage->authorize(["admin"])) {
  print("Only admins can come here");
}
```

### login($user_id)

Adott ID-jú felhasználó bejelentkeztetése, bejelentkezés tárolása a munkamenetben.

#### Paraméterek

| név        | típus  | leírás              |
| ---------- | ------ | ------------------- |
| `$user_id` | string | a felhasználó ID-ja |

#### Példa

```php
$user_storage->login($han_id);
```

### logout()

Kilépteti a felhasználót, törli a munkamenetből a bejelentkezést.
