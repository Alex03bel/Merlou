var washNextItem = function (itemLeft) {

    console.log('В раковине осталось ' + itemLeft + ' предметов');
    itemLeft--;

    if (itemLeft > 0){
        washNextItem(itemLeft);
    }
}

washNextItem(11);