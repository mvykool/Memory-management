#include <stdio.h>

int main(){
  printf("starting python interpreter\n");
  return 0;
}

// some examples with basic types

int main() {
  int max_recursive_calls = 100;
  char io_mode = 'w';
  float throttle_speed = 0.2;
  // unlike char, that requires single quotes '', char * requires double quotes ""
  char *will_never_hear_again =
      "Hey TJ, when is the memory course in C gonna be done?";

  // don't touch below this line
  printf("Max recursive calls: %d\n", max_recursive_calls);
  printf("IO mode: %c\n", io_mode);
  printf("Throttle speed: %f\n", throttle_speed);
  return 0;
}

/*
 Common format specifiers are:

%d - digit (integer)
%c - character
%f - floating point number
%s - string (char *)
*/

int main() {
  int sneklang_default_max_threads = 8;
  char sneklang_default_perms = 'r';
  float sneklang_default_pi = 3.141592;
  char *sneklang_title = "Sneklang";
  // don't touch above this line
  printf("Default max threads :%d\n", sneklang_default_max_threads);
  printf("Custom perms :%c\n", sneklang_default_perms);
  printf("constant pi value :%f\n", sneklang_default_pi);
  printf("Sneklang title :%s\n", sneklang_title);
  // ?

  return 0;
}

