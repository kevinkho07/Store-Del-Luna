function formsubmit(event)
{
    event.preventDefault();
    let name = document.getElementById("fullnametf").value;
    let username = document.getElementById("nametf").value;
    let email = document.getElementById("emaildf").value;
    let password = document.getElementById("passwordf").value;
    let confirm_password = document.getElementById("confirmpassf").value;
    
    console.log(name, username, email, password);

    let error = document.getElementById("error");
    
    if(name === "")
        errorMsg ="Name can't be empty";
    else if(username === "")
        errorMsg ="Username can't be empty";
    else if(email === "")
        errorMsg = "Email can't be empty";
    else if(password === "")
        errorMsg = "Password can't be empty"
    else if(confirm_password !== password)
        errorMsg = "Confirm password not match"
    else if(!check_alphatbet_letter(password))
        errorMsg = "Password minimum 1 capital";
    else if(password.length < 8)
        errorMsg = "password minimum 8 character";
    else if(genderM === "")
        errorMsg = "Pick your gender"
    else
        errorMsg = "Successfully sign up!";
        
    showError(errorMsg);

}

function showError(str)
{
    let error = document.getElementById('error')
    error.innerHTML = str
    setTimeout(() =>
    {
        error.innerHTML = ""
    }, 9000)
}


function check_alphatbet_letter(str)
{
    let flag = false;
    for(let i = 0; i < str.length; ++i)
    {
        if(str[i] >= 'A' && str[i] <= 'Z')
        {
            flag = true;
            break;
        }
    }
    return flag;
}

