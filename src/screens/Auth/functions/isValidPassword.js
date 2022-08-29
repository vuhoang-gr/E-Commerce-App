const isValidPassword = (pass) => {
    if(pass.length > 5)
        return true;
    return false;
}

export default isValidPassword