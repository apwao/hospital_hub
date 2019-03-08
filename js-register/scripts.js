function validate() {

    if( document.myForm.hospitalName.value == "" ) {
      alert( "Please provide the name of the hospital!" );
      document.myForm.hospitalName.focus() ;
      return false;
    }

    if( document.myForm.phoneNumber.value == "" ) {
      alert( "Please provide your Phone Number")
      document.myForm.phoneNumber.focus() ;
      return false;
    }

    if( document.myForm.emailAddress.value == "") {
      alert("Please provide your email address")
      document.myForm.emailAddress.focus() ;
      return false;
    }

    if( document.myForm.password.value == "") {
      alert("Please provide your password")
      document.myForm.password.focus() ;
      return false;
    }

    if( document.myForm.hospitalLocation.value == "") {
      alert("Please provide your hospital location")
      document.myForm.hospitalLocation.focus() ;
      return false;
    }
    return( true );
  }
