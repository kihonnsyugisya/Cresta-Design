$(function () {
  var $header = $('header');

  //開閉用ボタンをクリックでクラスの切替え
  $('#js__btn').on('click', function () {
      $header.toggleClass('open');
  });

  //メニュー名以外の部分をクリックで閉じる
  $('#js__nav').on('click', function () {
      $header.removeClass('open');
  });
});