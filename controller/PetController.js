const PetController = {
    index: (req, res) => {
        res.send("Página inicial");
    },
    add: (req, res) => {
        res.send("Adiciona pet");
    },
    show: (req, res) => {
        res.send("Exibe 1 pet");
    },
};

module.exports = PetController;
