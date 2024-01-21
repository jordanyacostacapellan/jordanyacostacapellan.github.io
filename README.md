<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Sophisticated Personal Website</title>
    <style>
        /* Basic Reset */
        body, h1, h2, h3, p, nav, div {
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f4f4f4;
            padding: 0 10px;
        }

        .container {
            max-width: 1100px;
            margin: auto;
            overflow: hidden;
            padding: 0 20px;
        }

        /* Header */
        header {
            background: #35424a;
            color: #ffffff;
            padding-top: 30px;
            min-height: 70px;
            border-bottom: #e8491d 3px solid;
        }

        header a {
            color: #ffffff;
            text-decoration: none;
            text-transform: uppercase;
            font-size: 16px;
        }

        header ul {
            padding: 0;
            list-style: none;
        }

        header li {
            display: inline;
            margin: 0 20px;
        }

        header #branding {
            float: left;
        }

        header #branding h1 {
            margin: 0;
        }

        header nav {
            float: right;
            margin-top: 10px;
        }

        header .highlight, header .current a {
            color: #e8491d;
            font-weight: bold;
        }

        /* Showcase */
        #showcase {
            min-height: 400px;
            background: url('showcase.jpg') no-repeat 0 -400px;
            text-align: center;
            color: #ffffff;
        }

        #showcase h1 {
            margin-top: 100px;
            font-size: 55px;
            margin-bottom: 10px;
        }

        #showcase p {
            font-size: 20px;
        }

        /* Newsletter */
        #newsletter {
            padding: 15px;
            color: #ffffff;
            background: #35424a;
        }

        #newsletter h1 {
            float: left;
        }

        #newsletter form {
            float: right;
            margin-top: 15px;
        }

        #newsletter input[type="email"] {
            padding: 4px;
            height: 25px;
            width: 250px;
        }

        /* Boxes */
        #boxes .box {
            float: left;
            text-align: center;
            width: 30%;
            padding: 10px;
        }

        #boxes .box img {
            width: 90px;
        }

        /* Footer */
        footer {
            padding: 20px;
            margin-top: 20px;
            color: #ffffff;
            background-color: #35424a;
            text-align: center;
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <div id="branding">
                <h1><span class="highlight">My</span> Website</h1>
            </div>
            <nav>
                <ul>
                    <li class="current"><a href="#showcase">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <section id="showcase">
        <div class="container">
            <h1>Welcome to My Sophisticated Website</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies at, vulputate id lorem. Nulla facilisi.</p>
        </div>
    </section>

    <section id="newsletter">
        <div class="container">
            <h1>Subscribe to Our Newsletter</h1>
            <form>
                <input type="email" placeholder="
