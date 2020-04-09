var d = [ "adunit-9196d289d648aa14", "adunit-59dd8d4ab1b08730", "adunit-8678f0f29c1f09fd", "adunit-99243bead2c33d4f", "adunit-b97bad44c7933fa2", "adunit-05d05e960fb74b61", "adunit-cb42c110d53b1274", "adunit-fc66462d88384281", "adunit-a4ffe985fe88ba6d", "adunit-6de2266f02345399" ], a = [];

d.forEach(function(d, f) {
    a[f] = 0 === f ? 1 : Math.floor(5 * f + 1);
}), module.exports = {
    adi: a,
    ads: d
};