<?php
include('./mailchimp-api-master/src/MailChimp.php');

if ($_POST['email'] && $_POST['name'] && $_POST['city'] && $_POST['state']) {
	use \DrewM\MailChimp\MailChimp;

	$MailChimp = new MailChimp('c47184e499d82b8de20cd985ffdc234e-us14');

	$list_id = 'c1b91cc69c';

	$result = $MailChimp->post("lists/$list_id/members", [
	    'email_address' => $_POST['email'],
	    'status'        => 'subscribed',
	]);
	print_r($result);

	$subscriber_hash = $MailChimp->subscriberHash($_POST['email']);

	$result = $MailChimp->patch("lists/$list_id/members/$subscriber_hash", [
        'merge_fields' => ['NAME'=>$_POST['name'], 'CITY'=>$_POST['city'], 'STATE'=>$_POST['state']]
    ]);
    print_r($result);
}
?>