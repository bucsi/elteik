function verify_post(...$inputs) {
  foreach ($inputs as $input) {
    if (!isset($_POST[$input])) {
      return FALSE;
    }
  }

  return TRUE;
}

function array_all_keys_exist($array, $inputs) {
  foreach ($inputs as $input) {
    if (!isset($array[$input])) {
      return FALSE;
    }
  }

  return TRUE;
}