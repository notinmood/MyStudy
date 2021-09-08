<?php
// /**
//  * @file   : index.php
//  * @time   : 12:30
//  * @date   : 2021/9/8
//  * @emailto: 9727005@qq.com
//  * @creator: ShanDong Xiedali
//  * @company: HiLand & RainyTop
//  */
//
// require "../vendor/autoload.php";
//
//
// use TypedPHP\Optional\Optional;
//
// $optional = new Optional("hello world");
// $optional
//     // ->none(function() { print "none"; }); // "none" not printed
// ->value(function($value) { print $value; }); // "hello world" printed
//
// // class Foo
// // {
// //     public function hello()
// //     {
// //         return new Bar();
// //     }
// // }
// //
// // class Bar
// // {
// //     public function world()
// //     {
// //         return "hello world";
// //     }
// // }
// //
// // $optional = new Optional(new Foo());
// // $optional->hello()->world()->value(); // "hello world"
//
//
// // require "./myfunctions.php";
// //
// // $myValue= "";
// //
// // nonNull($myValue, function ($myValue){
// //     echo "不是空的";
// // },function (){
// //     echo "我是空的";
// // });