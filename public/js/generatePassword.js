function generatePassword() {
        var upCase = document.getElementById('upCase'),
            lowCase = document.getElementById('lowCase'),
            nums = document.getElementById('nums'),
            spec = document.getElementById('spec'),
            range = document.getElementById('customRange1'),
            genPw = document.getElementById('genPw'),
            pwDisplay = document.getElementById('pwDisplay'),
            pwWarning = document.getElementById('pwWarning');

        var length = range.value,
            lowerCase = "abcdefghijklmnopqrstuvwxyz",
            upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            numbers = "0123456789",
            specialChar = "!#$%&()*+,-./<=>?@[]^_{|}~",
            charset = "",
            retVal = "";

            if(upCase.checked){
              charset = charset + upperCase;
            }

            if(lowCase.checked){
              charset = charset + lowerCase;
            }

            if(nums.checked){
              charset = charset + numbers;
            }

            if(spec.checked){
              charset = charset + specialChar;
            }

        for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }

        genPw.innerHTML = retVal.toString();

        if(genPw.innerHTML.length < 8){
          pwDisplay.style.backgroundColor = "#d9534f";
          pwWarning.innerHTML = "Weak Password!";
        }
        else if(genPw.innerHTML.length === 8 || genPw.innerHTML.length === 9){
          pwDisplay.style.backgroundColor = "#ec971f";
          pwWarning.innerHTML = "Medium Password";
        }
        else {
          pwDisplay.style.backgroundColor = "#449d44";
          pwWarning.innerHTML = "Strong Password";
        }
        return retVal;
    }