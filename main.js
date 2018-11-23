'use strict';

function loadAllItems() {
  return [
    {
      barcode: 'ITEM000000',
      name: '可口可乐',
      unit: '瓶',
      price: 3.00
    },
    {
      barcode: 'ITEM000001',
      name: '雪碧',
      unit: '瓶',
      price: 3.00
    },
    {
      barcode: 'ITEM000002',
      name: '苹果',
      unit: '斤',
      price: 5.50
    },
    {
      barcode: 'ITEM000003',
      name: '荔枝',
      unit: '斤',
      price: 15.00
    },
    {
      barcode: 'ITEM000004',
      name: '电池',
      unit: '个',
      price: 2.00
    },
    {
      barcode: 'ITEM000005',
      name: '方便面',
      unit: '袋',
      price: 4.50
    }
  ];
}

function loadPromotions() {
  return [
    {
      type: 'BUY_TWO_GET_ONE_FREE',
      barcodes: [
        'ITEM000000',
        'ITEM000001',
        'ITEM000005'
      ]
    }
  ];
}

function buildGoodsCountLists (barcodeLists) {
  return barcodeList.map(barcodeList => {
    return buildGoodsCountList(barcodeList);
  });
  
}
function buildGoodsCountList (barcodeList) {
    let [barcode, quantity] = barcodeList.split("-");
    quantity = quantity === undefined ? 1 : parseFloat(count);
    return {
      barcode,
      quantity
    };
}

function buildPurchasedGoodsList (goodsCountList) {
  var inventoryList = loadAllItems();

  //Target: Filter the purchased goods from inventoryList by barcode and return a purchasedGoodsList with additional information of name, unit, price.
}

function calculateGoodPrice (purchasedGoodsList) {
  var promotionList = loadPromotions();

  //Target: Calculate subtotal and saving per each goods from promotionList

}


function BuildPriceReceipt (purchasedGoodsList) {


}

function FormatReceipt (receiptStrWithoutFormat) {

}


function printReceipt (barcodeList) {
  var goodsCountList = buildGoodsCountLists(barcodeList);
  var purchasedGoodsList = buildPurchasedGoodsList(goodsCountList);
  var purchasedGoodsList = calculateGoodPrice (purchasedGoodsList);
  var receiptStrWithoutFormat = BuildPriceReceipt(purchasedGoodsList);
  FormatReceipt(receiptStrWithoutFormat);
}
   	


module.exports = printReceipt;