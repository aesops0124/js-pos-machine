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

function buildGoodsCountList (list) {
  let count = [];
  let item = [];
  for (var i=0; i<list.length; i++) {
    if(list[i].split('-').length > 0) {
      count.push(list[i].split("-")[1]);
      item.push(list[i].split("-")[0]);
      list.splice(list.indexOf(list[i]),1);
    }
  }
  for (var i=0; i<count; i++) {
    list.push(item[i]);
  }
  
  let c = [];
  list = list.forEach(function(i) { c[i] = (c[i]||0) + 1;});
  return list;
}
function manipulatePromotions(receipt, promotionList) {
  var buyTwoGetOneFreeitemList = promotionList.filter(item => item.type == 'BUY_TWO_GET_ONE_FREE');
  buyTwoGetOneFreeitemList = buyTwoGetOneFreeitemList.barcodes;
}

function createReceipt (expandedShoppingItemList) {
  let uniqueItemList = loadAllItems();
  let promotionItemList = loadPromotions();

  
  let receiptWithoutPromotion = {};
  


  var receiptWithPromotion = manipulatePromotions (receiptWithoutPromotion, promotionItemList);


}

function printReceipt (shoppingItemList) {
  var goodsCountList = buildGoodsCountList(shoppingItemList);
  var purchasedGoodsList = buildPurchasedGoodsList(goodsCountList);
  var purchasedGoodsList = calculateGoodPrice (purchasedGoodsList);
  var receiptStrWithoutFormat = BuildPriceReceipt(purchasedGoodsList);
  FormatReceipt(receiptStrWithoutFormat);
}
   	


module.exports = printReceipt;