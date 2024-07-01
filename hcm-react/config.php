<?php
define("DB_HOST", "localhost");
define("DB_USER", "root"); 
define("DB_PASS", ""); 
define("DB_NAME", "pdo"); 
// Message Settings
define('insertSuccess', 'Insert Successfully');
define('updateSuccess', 'Update Successfully');
define('deleteSuccess', 'Deleted Successfully');

define('prescriptions', 'prescriptions');
define('test_details', 'test_details');
define('checkup_remarks', 'checkup_remarks');
define('lab_test', 'lab_test');
define('payment', 'payment');

$json = json_decode('php://input');
$data = $json['data'];

$xyz = DB::insert(prescriptions,$data);
$xyz = DB::insert(test_details,$data);
$xyz = DB::insert(payment,$data);
$xyz = DB::insert(checkup_remarks,$data);
$xyz = DB::insert(lab_test,$data);