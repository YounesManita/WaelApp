const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'younesmanita975@gmail.com',
    pass: 'juxv pbpm osgp nqfd',
},
});

const sendEmailToAdmin = (contactDetails) => {
  const mailOptions = {
    from: contactDetails.email,
    to: 'waelhsairi6@gmail.com',
    subject: '📩 New Contact Message Received',
    html: `
 <!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nuevo Mensaje de Cliente</title>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">

  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 0;
      padding: 0;
      background: linear-gradient(135deg, #f3f4f7, #a2b2c7);
    }

    .container {
      width: 80%;
      max-width: 700px;
      margin: 50px auto;
      background-color: #fff;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    }

    .header {
      background: #3bc2e7;
      color: #fff;
      text-align: center;
      padding: 40px;
      border-bottom: 4px solid #16a085;
    }

    .header img {
      max-width: 120px;
      margin-bottom: 20px;
    }

    .header h1 {
      font-size: 32px;
      margin: 0;
      font-weight: 600;
      letter-spacing: 2px;
    }

    .content {
      padding: 30px;
      color: #333;
    }

    .content h2 {
      font-size: 24px;
      color: #1abc9c;
      margin-bottom: 20px;
    }

    .content p {
      font-size: 16px;
      line-height: 1.6;
      margin-bottom: 25px;
      color: #555;
    }

    .content .info {
      background: #f7f7f7;
      border-radius: 10px;
      padding: 20px;
      margin-bottom: 25px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .content .info p {
      margin: 5px 0;
      font-size: 16px;
    }

    .content .info p span {
      font-weight: bold;
      color: #16a085;
    }

    .footer {
      background-color: #64a2ee;
      color: #fff;
      text-align: center;
      padding: 25px;
      font-size: 14px;
    }

    .footer p {
      margin: 0;
    }

    .footer a {
      color: #fff;
      text-decoration: none;
      font-weight: bold;
      transition: color 0.3s ease;
    }

    .footer a:hover {
      color: #16a085;
    }

    .footer .social-icons {
      margin: 20px 0;
    }

    .footer .social-icons a {
      color: #fff;
      text-decoration: none;
      margin: 0 15px;
      font-size: 24px;
      transition: color 0.3s ease;
    }

    .footer .social-icons a:hover {
      color: #16a085;
    }

    .footer .phone {
      font-size: 18px;
      margin-top: 15px;
      color: #fff;
      font-weight: bold;
    }

    .btn {
      display: inline-block;
      padding: 12px 30px;
      background-color: #3498db;
      color: #fff;
      font-weight: 600;
      font-size: 16px;
      text-align: center;
      text-decoration: none;
      border-radius: 30px;
      transition: background-color 0.3s ease;
      margin-top: 20px;
    }

    .btn:hover {
      background-color: #2980b9;
    }
    .social-icons {
  display: flex;
  gap: 15px;
}

.social-icon i {
  font-size: 24px;
  color: #333; /* Couleur de l'icône */
  transition: color 0.3s ease;
}

.social-icon:hover i {
  color: #0073e6; /* Couleur au survol */
}

  </style>
</head>
<body>

  <div class="container">
    <!-- Sección del encabezado -->
    <div class="header">
      <img src="https://via.placeholder.com/150x50?text=Your+Logo" alt="Logo de tu empresa">
      <h1>Nuevo Mensaje de Cliente</h1>
    </div>

    <!-- Sección de contenido -->
    <div class="content">
      <h2>Hola Administrador,</h2>
      <p>Has recibido un nuevo mensaje desde el formulario de contacto. Aquí están los detalles:</p>

      <div class="info">
        <p><span>Nombre:</span> ${contactDetails.name}</p>
        <p><span>Apellido:</span> ${contactDetails.prename}</p>
        <p><span>Correo Electrónico:</span> ${contactDetails.email}</p>
        <p><span>Teléfono:</span> ${contactDetails.numtel}</p>
      </div>

      <h2>Mensaje:</h2>
      <p>${contactDetails.message}</p>

      <a href="https://tuempresa.com/contacto" class="btn">Responder al Cliente</a>
    </div>

    <!-- Sección del pie de página -->
    <div class="footer">
      <p>&copy; 2024 Tu Empresa. Todos los derechos reservados.</p>
      
      <div class="social-icons">
        <a href="https://www.facebook.com/tuempresa" target="_blank" class="social-icon">
          <i class="fab fa-facebook-f"></i> <!-- Icône Facebook -->
        </a>
        <a href="https://www.instagram.com/tuempresa" target="_blank" class="social-icon">
          <i class="fab fa-instagram"></i> <!-- Icône Instagram -->
        </a>
        <a href="https://www.linkedin.com/company/tuempresa" target="_blank" class="social-icon">
          <i class="fab fa-linkedin-in"></i> <!-- Icône LinkedIn -->
        </a>
        <a href="https://twitter.com/tuempresa" target="_blank" class="social-icon">
          <i class="fab fa-twitter"></i> <!-- Icône Twitter -->
        </a>
      </div>

      <!-- Número de teléfono -->
      <p class="phone">Llámanos: <a href="tel:+1234567890" style="color: #9cdbff;">+1 (234) 567-890</a></p>

      <p>
        <a href="https://tuempresa.com" target="_blank">Visita nuestro sitio web</a>
      </p>
    </div>
  </div>

</body>
</html>


    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email: ', error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

module.exports = sendEmailToAdmin;
