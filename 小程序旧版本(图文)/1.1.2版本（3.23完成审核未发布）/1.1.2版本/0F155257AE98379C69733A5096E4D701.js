var a = [ "adunit-0a927c1a627b1376", "adunit-355e9b920317bb09", "adunit-46e32fbab942acf7", "adunit-bb9c70552c8c1733", "adunit-4b3d305f27937aae", "adunit-f1e3a07bc9b79c8c", "adunit-5d998b17cb2a8a0d", "adunit-9ca493d5b56d9b8f", "adunit-2204beb67e21764d", "adunit-a8589a02f6be1400", "adunit-38eefb8c809bc1e6", "adunit-e33a8d1b0b35d716", "adunit-17ccabf78d7e6b22", "adunit-ee9194bb88e4d26c", "adunit-13214949b80db22e", "adunit-7dbbc7904d4b5b42", "adunit-1827b6983669cb17", "adunit-6e528f6d7c543c30", "adunit-747d85431eaf2635", "adunit-6e24a92cdd2dfe42", "adunit-b281a26c32416bdf", "adunit-e5894ae2a9499e87", "adunit-f741a1ebf2b3ffa8", "adunit-1066abc345348369", "adunit-7b45bf6aaffd98cb", "adunit-eace5e5fd791866a", "adunit-50b5c903d791c75a", "adunit-a4285b9020711954", "adunit-af9d4352517f9ea3", "adunit-9e1ec32ad6b5642c" ], d = [];

a.forEach(function(a, b) {
    d[b] = 0 === b ? 1 : Math.floor(5 * b + 1);
}), module.exports = {
    adi: d,
    ads: a
};