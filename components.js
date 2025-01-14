 const editorComponents = (editorRef)=>{
    // This is our custom script
    const scriptMenu = function menuOptionClicked(option) {
        // Ajout d'un effet de clignotement sur le lien cliqué
        const link = Event.target;
        link.classList.add('clicked');
        setTimeout(() => {
            link.classList.remove('clicked');
        }, 300);
        
    }
     // nouveau composant personnalisé
     editorRef?.current.Components.addType('image', {
        model: {
          defaults: {
            content:{ type: 'image' },
           
          }
        }
      });
      // Create a block for the component, so we can drop it easily
      editorRef?.current.Blocks.add('image Line', {
        label: 'image',
        attributes: { class: 'fa fa-image' },
        content: { type: 'image' },
      });






        // nouveau composant personnalisé
        editorRef?.current.Components.addType('blog', {
            model: {
            defaults: {
                content:( 
                '<style>body { background-color: #f8f9fa; } h1 { text-align: center; margin: 20px 0; } .card { background: white; padding: 20px; border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); transition: transform 0.3s, box-shadow 0.3s; } .card:hover { transform: translateY(-5px); box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); } .btn-custom { background-color: #0284c7; color: white; transition: background-color 0.3s, transform 0.2s; } .btn-custom:hover { background-color: #0369a1; } .btn-custom:active { transform: scale(0.95); }</style>'
                +
                '<h1>Articles de Blog</h1><div class="container" style="max-width: 800px; margin: auto;"><div class="card mb-3"><h2>Titre de l\'Article 1</h2><img src="https://via.placeholder.com/600x300" alt="Image de l\'article 1" class="img-fluid" style="border-radius: 4px;"><p class="text-muted">Ceci est un extrait de l\'article 1. Vous pouvez en savoir plus sur ce sujet fascinant en lisant l\'article complet.</p><a href="#" class="btn btn-custom" onclick="articleClicked(\'Article 1\')">En savoir plus</a></div><div class="card mb-3"><h2>Titre de l\'Article 2</h2><img src="https://via.placeholder.com/600x300" alt="Image de l\'article 2" class="img-fluid" style="border-radius: 4px;"><p class="text-muted">Ceci est un extrait de l\'article 2. Continuez à explorer notre blog pour d\'autres articles intéressants.</p><a href="#" class="btn btn-custom" onclick="articleClicked(\'Article 2\')">En savoir plus</a></div><div class="card"><h2>Titre de l\'Article 3</h2><img src="https://via.placeholder.com/600x300" alt="Image de l\'article 3" class="img-fluid" style="border-radius: 4px;"><p class="text-muted">Ceci est un extrait de l\'article 3. Ne manquez pas nos récentes publications !</p><a href="#" class="btn btn-custom" onclick="articleClicked(\'Article 3\')">En savoir plus</a></div></div>'
                ), // Texte par défaut avant l'initialisation du script
            }
            }
        });
        // Create a block for the component, so we can drop it easily
        editorRef?.current.Blocks.add('blog Line', {
            label: 'blog',
            attributes: { class: 'fa fa-user' },
            content: { type: 'blog' },
        });

        // nouveau composant personnalisé
        editorRef?.current.Components.addType('contact-form', {
            model: {
            defaults: {
                content:( 
                
                '<div style="max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);"><h2 style="text-align: center;">Contactez-nous</h2><form action="/envoyer" method="post"><div style="margin-bottom: 15px;"><label for="nom" style="display: block; margin-bottom: 5px;">Nom</label><input type="text" id="nom" name="nom" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;" required></div><div style="margin-bottom: 15px;"><label for="email" style="display: block; margin-bottom: 5px;">E-mail</label><input type="email" id="email" name="email" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;" required></div><div style="margin-bottom: 15px;"><label for="message" style="display: block; margin-bottom: 5px;">Message</label><textarea id="message" name="message" rows="5" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; resize: vertical;" required></textarea></div><div style="margin-bottom: 15px;"><button type="submit" style="background-color: #0284c7; color: white; padding: 10px 15px; border: none; border-radius: 4px; cursor: pointer; width: 100%;">Envoyer</button></div></form></div>'
                ), // Texte par défaut avant l'initialisation du script
            }
            }
        });
        // Create a block for the component, so we can drop it easily
        editorRef?.current.Blocks.add('contact-form Line', {
            label: 'contact-form',
            attributes: { class: 'fa fa-phone' },
            content: { type: 'contact-form' },
        });

        

        

        // nouveau composant personnalisé
        editorRef?.current.Components.addType('section de titres 1', {
        model: {
        defaults: {
            content:( 
            
            '<div class="section-titres" style="font-family: Arial, sans-serif; background-color: #f0f0f0; margin: 0; padding: 20px; background-color: #fff; border-radius: 5px; padding: 20px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);"><h1 style="color: #333; font-size: 24px;">Titre Principal</h1><h2 style="color: #666; font-size: 20px;">Sous-titre 1</h2><h3 style="color: #999; font-size: 18px;">Détails du sous-titre 1</h3><h2 style="color: #666; font-size: 20px;">Sous-titre 2</h2><h3 style="color: #999; font-size: 18px;">Détails du sous-titre 2</h3></div>'
            ), // Texte par défaut avant l'initialisation du script
        }
        }
        });
        // Create a block for the component, so we can drop it easily
        editorRef?.current.Blocks.add('section de titres 1 Line', {
        label: 'section de titres 1',
        attributes: { class: 'fa fa-paragraph' },
        content: { type: 'section de titres 1' },
        });



        // nouveau composant personnalisé
        editorRef?.current.Components.addType('section de titres 2', {
        model: {
        defaults: {
            content:( 
            
            '<div class="section-titres" style="font-family: \'Verdana\', sans-serif; background-color: #f4f6f8; margin: 0; padding: 30px; color: #333; background-color: #fff; border-radius: 10px; padding: 40px; box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);"><h1 style="font-size: 30px; font-weight: bold; color: #2980b9; text-align: center; margin-bottom: 20px; border-bottom: 3px solid #3498db; padding-bottom: 10px;">Titre Principal Élégant</h1><div style="margin-bottom: 30px;"><h2 style="font-size: 24px; font-weight: normal; color: #27ae60; margin-bottom: 10px;">Sous-titre 1</h2><h3 style="font-size: 20px; font-weight: normal; color: #7f8c8d; margin-bottom: 10px;">Détails enrichissants sur le sous-titre 1</h3><p style="font-size: 16px; color: #555;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt, nulla vel scelerisque feugiat, felis nisi malesuada nisl, in feugiat purus arcu quis ligula.</p></div><div style="margin-bottom: 30px;"><h2 style="font-size: 24px; font-weight: normal; color: #e67e22; margin-bottom: 10px;">Sous-titre 2</h2><h3 style="font-size: 20px; font-weight: normal; color: #7f8c8d; margin-bottom: 10px;">Détails captivants sur le sous-titre 2</h3><p style="font-size: 16px; color: #555;">Curabitur nec ligula at urna cursus tristique. Sed tempus, purus id facilisis cursus, magna dolor suscipit lorem, et pretium nibh magna quis sapien.</p></div><div style="margin-bottom: 30px;"><h2 style="font-size: 24px; font-weight: normal; color: #c0392b; margin-bottom: 10px;">Sous-titre 3</h2><h3 style="font-size: 20px; font-weight: normal; color: #7f8c8d; margin-bottom: 10px;">Détails intéressants sur le sous-titre 3</h3><p style="font-size: 16px; color: #555;">Phasellus pellentesque felis sit amet tortor condimentum, nec faucibus lacus suscipit. Aenean bibendum, nisl ut tempus felis, nunc tellus tristique risus.</p></div></div>'
            ), // Texte par défaut avant l'initialisation du script
        }
        }
        });
        // Create a block for the component, so we can drop it easily
        editorRef?.current.Blocks.add('section de titres 2 Line', {
        label: 'section de titres 2',
        attributes: { class: 'fa fa-paragraph' },
        content: { type: 'section de titres 2' },
        });




        // nouveau composant personnalisé
        editorRef?.current.Components.addType('menu', {
        model: {
        defaults: {
            scriptMenu,
            
            content:( 
            '<style>.navbar-nav .nav-link { cursor: pointer; /* Change le curseur pour indiquer que c\'est cliquable */ transition: background-color 0.3s, transform 0.2s; /* Transition pour le changement de couleur et l\'effet de clic */ } .navbar-nav .nav-link:hover { background-color: #e2e6ea; /* Couleur de fond au survol */ transform: scale(1.05); /* Légère augmentation de taille au survol */ } .navbar-nav .nav-link:active { transform: scale(0.95); /* Réduction de taille lors du clic */ }</style>' 
            + 
            '<nav class="navbar navbar-expand-lg navbar-light bg-light"><a class="navbar-brand" href="#">Mon Site</a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarNav"><ul class="navbar-nav"><li class="nav-item"><a class="nav-link" onclick="menuOptionClicked(\'Option 1\')">Option 1</a></li><li class="nav-item"><a class="nav-link" onclick="menuOptionClicked(\'Option 2\')">Option 2</a></li><li class="nav-item"><a class="nav-link" onclick="menuOptionClicked(\'Option 3\')">Option 3</a></li><li class="nav-item"><a class="nav-link" onclick="menuOptionClicked(\'Option 4\')">Option 4</a></li><li class="nav-item"><a class="nav-link" onclick="menuOptionClicked(\'Option 5\')">Option 5</a></li></ul></div></nav>'
            ), // Texte par défaut avant l'initialisation du script
        }
        }
        });
        // Create a block for the component, so we can drop it easily
        editorRef?.current.Blocks.add('menu Line', {
        label: 'menu',
        attributes: { class: 'fa fa-list' },
        content: { type: 'menu' },
        });



        // nouveau composant personnalisé
        editorRef?.current.Components.addType('slide', {
        model: {
        defaults: {

        content:( 
        `<style>
        body 
        {margin: 0;padding: 0;font-family: Arial, sans-serif;overflow: hidden;} 
        .slider {position: absolute;width: 100%;height: 100vh;overflow: hidden;padding:5px;margin-bottom:5px;}
        .slides {display: flex;width: 300%; /* 3 slides */height: 100%;animation: slide 9s infinite; /* Durée totale pour 3 slides */ }
        @keyframes slide {0% { transform: translateX(0); }33.33% { transform: translateX(-33%); }66.66% { transform: translateX(-66%); }99.99% { transform: translateX(0%); }}  .slide {width: 100vw; /* 1 slide at a time */height: 100vh;display: flex;flex-direction: column;align-items: center;justify-content: center;color: white;background-size: cover;background-position: center;}   .title {font-size: 2.5em;margin: 10px 0;}  .text {font-size: 1.2em;text-align: center;max-width: 600px;}</style>' + '<span class="slider"><div class="slides"><div class="slide" style="background-image: url(\'https://via.placeholder.com/800x600/FF5733/FFFFFF?text=Slide+1\');"><h1 class="title">Titre 1</h1><p class="text">Ceci est le texte du premier slide.</p></div><div class="slide" style="background-image: url(\'https://via.placeholder.com/800x600/33FF57/FFFFFF?text=Slide+2\');">|h1 class="title">Titre 2</h1>\<p class="text">Ceci est le texte du deuxième slide.</p></div><div class="slide" style="background-image: url(\'https://via.placeholder.com/800x600/3357FF/FFFFFF?text=Slide+3\');"><h1 class="title">Titre 3</h1><p class="text">Ceci est le texte du troisième slide.</p></div></div></span>'`
        ), // Texte par défaut avant l'initialisation du script
    }
    }
    });
    // Create a block for the component, so we can drop it easily
    editorRef?.current.Blocks.add('Slide Line', {
    label: 'Slide',
    attributes: { class: 'fa fa-image' },
    content: { type: 'slide' },
    });

    //composant personnalisé tableau
    editorRef?.current.Components.addType('tableau', {
        model: {
            defaults: {
                content: `
                    <style>
                        .custom-table {
                            width: 100%;
                            border-collapse: collapse;
                            margin: 25px 0;
                            font-size: 0.9em;
                            font-family: sans-serif;
                            box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
                        }
                        .custom-table thead tr {
                            background-color: #009879;
                            color: #ffffff;
                            text-align: left;
                        }
                        .custom-table th,
                        .custom-table td {
                            padding: 12px 15px;
                            outline: none;
                        }
                        .custom-table tbody tr {
                            border-bottom: 1px solid #dddddd;
                        }
                        .custom-table tbody tr:nth-of-type(even) {
                            background-color: #f3f3f3;
                        }
                        .custom-table tbody tr:last-of-type {
                            border-bottom: 2px solid #009879;
                        }
                        .custom-table th[contenteditable="true"]:focus,
                        .custom-table td[contenteditable="true"]:focus {
                            background-color: rgba(255, 255, 255, 0.1);
                            border: 1px solid #009879;
                        }
                    </style>
                    <table class="custom-table">
                        <thead>
                            <tr>
                                <th contenteditable="true">champ 1</th>
                                <th contenteditable="true">champ 2</th>
                                <th contenteditable="true">champ 3</th>
                                <th contenteditable="true">champ 3</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td contenteditable="true"> ... </td>
                                <td contenteditable="true"> ... </td>
                                <td contenteditable="true"> ... </td>
                                <td contenteditable="true"> ... </td>
                            </tr>
                            <tr>
                                <td contenteditable="true"> ... </td>
                                <td contenteditable="true"> ... </td>
                                <td contenteditable="true"> ... </td>
                                <td contenteditable="true"> ... </td>
                            </tr>
                            <tr>
                                <td contenteditable="true"> ... </td>
                                <td contenteditable="true"> ... </td>
                                <td contenteditable="true"> ... </td>
                                <td contenteditable="true"> ... </td>
                            </tr>
                        </tbody>
                    </table>
                `
            }
        }
    });
    
    editorRef?.current.Blocks.add('tableau Line', {
        label: 'Tableau',
        attributes: { class: 'fa fa-table' },
        content: { type: 'tableau' },
    });

  //composant personnalisé footer
    editorRef?.current.Components.addType('footer', {
        model: {
            defaults: {
                content: `
                    <style>
                        .modern-footer {
                            background-color: #333;
                            color: white;
                            padding: 40px 0;
                            font-family: Arial, sans-serif;
                        }
                        .footer-content {
                            max-width: 1200px;
                            margin: 0 auto;
                            display: grid;
                            grid-template-columns: repeat(3, 1fr);
                            gap: 40px;
                            padding: 0 20px;
                        }
                        .footer-section h3 {
                            color: #fff;
                            margin-bottom: 20px;
                        }
                        .footer-section p, .footer-section a {
                            color: #bbb;
                            text-decoration: none;
                            line-height: 1.6;
                        }
                        .footer-bottom {
                            text-align: center;
                            margin-top: 40px;
                            padding-top: 20px;
                            border-top: 1px solid #555;
                        }
                        [contenteditable="true"]:focus {
                            outline: 1px solid #009879;
                            background-color: rgba(255, 255, 255, 0.1);
                            padding: 2px;
                        }
                    </style>
                    <footer class="modern-footer">
                        <div class="footer-content">
                            <div class="footer-section">
                                <h3 contenteditable="true">À propos</h3>
                                <p contenteditable="true">mmmmmmmmnnnnnnnjfjfkfdsaeussuvdus</p>
                            </div>
                            <div class="footer-section">
                                <h3 contenteditable="true">Contact</h3>
                                <p contenteditable="true">Email: contact@gmail.com</p>
                                <p contenteditable="true">Téléphone: +237 657 15 82 50 </p>
                            </div>
                            <div class="footer-section">
                                <h3 contenteditable="true">Liens rapides</h3>
                                <p><a href="#" contenteditable="true">Accueil</a></p>
                                <p><a href="#" contenteditable="true">Services</a></p>
                                <p><a href="#" contenteditable="true">Contact</a></p>
                            </div>
                        </div>
                        <div class="footer-bottom">
                            <p contenteditable="true">&copy; 2025 deby. Tous droits réservés.</p>
                        </div>
                    </footer>
                `
            }
        }
    });
    
    editorRef?.current.Blocks.add('footer Line', {
        label: 'Footer',
        attributes: { class: 'fa fa-bookmark' },
        content: { type: 'footer' },
    });
    
//composant personnalisé barre de recherche
    editorRef?.current.Components.addType('searchbox', {
        model: {
            defaults: {
                content: `
                    <style>
                        .search-container {
                            max-width: 600px;
                            margin: 20px auto;
                            padding: 15px;
                        }
                        .search-box {
                            position: relative;
                            display: flex;
                            align-items: center;
                        }
                        .search-input {
                            width: 100%;
                            padding: 12px 45px 12px 15px;
                            border: 2px solid #009879;
                            border-radius: 25px;
                            font-size: 16px;
                            outline: none;
                            transition: all 0.3s ease;
                        }
                        .search-input:focus {
                            box-shadow: 0 0 10px rgba(0,152,121,0.2);
                        }
                        .search-input::placeholder {
                            color: #999;
                        }
                        .search-button {
                            position: absolute;
                            right: 5px;
                            padding: 8px 15px;
                            background: #009879;
                            color: white;
                            border: none;
                            border-radius: 20px;
                            cursor: pointer;
                            transition: background 0.3s ease;
                        }
                        .search-button:hover {
                            background: #007c63;
                        }
                    </style>
                    <div class="search-container">
                        <form class="search-box">
                            <input type="text" class="search-input" placeholder="Rechercher..." contenteditable="true">
                            <button type="submit" class="search-button" contenteditable="true">
                                ok
                            </button>
                        </form>
                    </div>
                `
            }
        }
    });
    
    editorRef?.current.Blocks.add('searchbox Line', {
        label: 'Barre de recherche',
        attributes: { class: 'fa fa-search' },
        content: { type: 'searchbox' },
    });
    
    editorRef?.current.Components.addType('shapes', {
        model: {
            defaults: {
                content: `
                    <style>
                        .shapes-container {
                            display: flex;
                            flex-wrap: wrap;
                            gap: 20px;
                            padding: 20px;
                            justify-content: center;
                        }
                        .shape {
                            width: 100px;
                            height: 100px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            color: white;
                            font-weight: bold;
                            cursor: pointer;
                            transition: transform 0.3s ease;
                        }
                        .shape:hover {
                            transform: scale(1.1);
                        }
                        .circle {
                            border-radius: 50%;
                            background: #009879;
                        }
                        .square {
                            background: #2980b9;
                        }
                        .triangle {
                            width: 0;
                            height: 0;
                            background: transparent;
                            border-left: 50px solid transparent;
                            border-right: 50px solid transparent;
                            border-bottom: 86.6px solid #e74c3c;
                        }
                        .rectangle {
                            width: 150px;
                            height: 75px;
                            background: #f1c40f;
                        }
                        .diamond {
                            transform: rotate(45deg);
                            background: #9b59b6;
                        }
                        .diamond span {
                            transform: rotate(-45deg);
                        }
                    </style>
                    <div class="shapes-container">
                        <div class="shape circle" contenteditable="true">Cercle</div>
                        <div class="shape square" contenteditable="true">Carré</div>
                        <div class="shape triangle"></div>
                        <div class="shape rectangle" contenteditable="true">Rectangle</div>
                        <div class="shape diamond"><span contenteditable="true">Losange</span></div>
                    </div>
                `
            }
        }
    });
    
    editorRef?.current.Blocks.add('shapes Line', {
        label: 'Formes',
        attributes: { class: 'fa fa-shapes' },
        content: { type: 'shapes' },
    });
    
    
 }

 export default editorComponents;
