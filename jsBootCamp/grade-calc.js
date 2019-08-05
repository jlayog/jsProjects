function palindrome(str) {
    const reverse = str.split('').reverse().join('').toLowerCase('').replace('');
    if(str === reverse){
    return true;
    }
   else return false;
  }
  
  
  
  palindrome("eye");