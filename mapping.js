var map;
var marker = [];
var infoWindow = [];
var markerData = [ // マーカーを立てる場所名・緯度・経度
  {
       name: 'アニメ「サマー ライト」第1話<br>優梨と純が待ち合わせるシーン<br><a href="https://twitter.com/search?q=%23%E3%82%B5%E3%83%9E%E3%83%BC%E3%83%A9%E3%82%A4%E3%83%881%E8%A9%B1%E5%84%AA%E6%A2%A8%E7%B4%94%E5%BE%85%E3%81%A1%E5%90%88%E3%82%8F%E3%81%9B&src=typed_query&f=top">★★★★★</a>',
       lat: 31.563466,
        lng: 130.554605
 }, {
        name: 'ドラマ「太郎」最終話<br>太郎が知事として初登庁するシーン<br>★★☆☆☆',
     lat: 31.559984,
        lng: 130.557625
 }, {
        name: 'アニメ「クロスアンブレラ」第5話<br>祥雄が予告ホームランを打つシーン<br>★★★★★',
     lat: 31.564410,
      lng: 130.557687
 }, {
        name: '映画「マリンパーク」<br>ジェームズが海底遺跡を発見するシーン<br>★★★☆☆',
        lat: 31.564613,
        lng: 130.565756
 }, {
        name: 'アニメ「サマー ライト」第2話<br>優梨がお菓子を買い食いするシーン<br>★★★★★',
     lat: 31.555253,
     lng: 130.554500
 }, {
        name: '映画「高貴釣り紳士録」<br>伝郎がカジキマグロをリリースするシーン<br>★☆☆☆☆',
       lat: 31.557304,
     lng: 130.561805
 }
];
 
function initMap() {
 // 地図の作成
    var mapLatLng = new google.maps.LatLng({lat: markerData[0]['lat'], lng: markerData[0]['lng']}); // 緯度経度のデータ作成
   map = new google.maps.Map(document.getElementById('sample'), { // #sampleに地図を埋め込む
     center: mapLatLng, // 地図の中心を指定
      zoom: 15 // 地図のズームを指定
   });
 
 // マーカー毎の処理
 for (var i = 0; i < markerData.length; i++) {
        markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']}); // 緯度経度のデータ作成
        marker[i] = new google.maps.Marker({ // マーカーの追加
         position: markerLatLng, // マーカーを立てる位置を指定
            map: map // マーカーを立てる地図を指定
       });
 
     infoWindow[i] = new google.maps.InfoWindow({ // 吹き出しの追加
         content: '<div class="sample">' + markerData[i]['name'] + '</div>' // 吹き出しに表示する内容
       });
 
     markerEvent(i); // マーカーにクリックイベントを追加
 }
}
 
// マーカーにクリックイベントを追加
function markerEvent(i) {
    marker[i].addListener('click', function() { // マーカーをクリックしたとき
      infoWindow[i].open(map, marker[i]); // 吹き出しの表示
  });
}