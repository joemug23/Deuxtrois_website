exports.accueil = (req, res) =>{
    res.render('layout', {
        title: "Accueil"
    });
}

exports.a_propos = (req, res) =>{
    res.render('layout', {
        title: 'A Propos'
    });
}

exports.contact = (req, res) =>{
    res.render('default', {
        title: "Contact"
    });
}

exports.portfolio = (req, res) =>{
    res.render('layout', {
        title: "Portfolio"
    });
}

exports.services = (req, res) =>{
    res.render('layout', {
        title: "Nos services"
    });
}

exports.temoignages = (req, res) =>{
    res.render('layout', {
        title: "Temoigmages"
    });
}