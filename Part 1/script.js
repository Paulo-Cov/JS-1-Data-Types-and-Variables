
function conversion(convertido){
    console.log("Al convertir "+convertido+" obtenemos:");
    console.log(Number(convertido));
    console.log(String(convertido));
    console.log(Boolean(convertido));
}
conversion(false);
conversion(true);
conversion(0);
conversion(1);
conversion("0");
conversion("000");
conversion("1");
conversion(NaN);
conversion(Infinity);
conversion(-Infinity);
conversion("");
conversion("20");
conversion("Twenty");
conversion(null);
conversion(undefined);

