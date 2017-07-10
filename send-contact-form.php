<?php

// Retreiving Contact Form Fields
$fullname = $_GET['fullname'];
$message = $_GET['message'];
$email = $_GET['email'];

// Send Email
$to = 'lightinthedarkway@gmail.com';
$from = 'contact@acklat.com';
$subject = 'A message From '.$fullname;
$message = '<b>'.$fullname.'</b> has sent you a message from you website:<br />
			<p style="padding:20px;background:#F8F8F8;border-left:5px solid #DDDDDD;">'.stripslashes($message).'<p>
			<br />If you want to contact the client <a href="mailto:'.$email.'">'.$email.'</a>';
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type: text/html; charset=iso-8859-1" . "\r\n";
$headers .= "From: SiRA! <no-reply@acklat.com>" . "\r\n" .
$headers .= "Reply-To: contact@acklat.com" . "\r\n" .
$headers .= "X-Mailer: PHP/" . phpversion();

$ok = @mail($to, $subject, $message, $headers, "-f " . $from);
?>

<!-- Return Succes Message -->
<div>
	<p>Thanks for contacting me <b><?php echo $fullname;?></b>. Your message was sent succesfully. I'm going to get in touch with you as soon as possible</p>
	<div class="lx-clear-fix"></div>	
</div>
