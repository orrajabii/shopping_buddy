export function allAccess(req, res) {
    res.status(200).send("Public Content.");
}

export function userBoard(req, res) {
    res.status(200).send("User Content.");
}

export function adminBoard(req, res) {
    console.log("admin -account");
    res.status(200).send("Admin Content.");
}

export function moderatorBoard(req, res) {
    res.status(200).send("Moderator Content.");
}

