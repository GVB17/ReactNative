isValidEmail = (textInput) => {

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (reg.test(textInput) === false) {
        return false;
    }
    else
        return true
};

export default {
    isValidEmail: isValidEmail,
}