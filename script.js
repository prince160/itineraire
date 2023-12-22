var map;
var startMarker;
var destinationMarker;

function compareItineraries() {
    var startLocation = document.getElementById('start').value;
    var destinationLocation = document.getElementById('destination').value;

    // Vérifier si les champs de départ et de destination sont vides
    if (!startLocation || !destinationLocation) {
        alert('Veuillez saisir à la fois la ville de départ et la destination.');
        return;
    }

    // Utiliser une fonction de géocodage ici si tu veux (comme discuté précédemment)

    // Exemple sans géocodage (utiliser des coordonnées statiques)
    var startLatLng, destinationLatLng;

    // Vérifier si les villes saisies sont parmi les itinéraires prédéfinis
    switch (startLocation + '-' + destinationLocation) {
        case 'Montpellier-Paris':
            startLatLng = [43.611015, 3.877016]; // Coordonnées de Montpellier
            destinationLatLng = [48.8566, 2.3522]; // Coordonnées de Paris
            break;
        case 'Marseille-Toulouse':
            startLatLng = [43.2965, 5.3698]; // Coordonnées de Marseille
            destinationLatLng = [43.6047, 1.4442]; // Coordonnées de Toulouse
            break;
        default:
            // Si les villes ne correspondent à aucun itinéraire prédéfini, utiliser Dijon - Lyon
            startLatLng = [47.3220, 5.0415]; // Coordonnées de Dijon
            destinationLatLng = [45.75, 4.85]; // Coordonnées de Lyon
            break;
    }

    // Centrer la carte sur le point de départ
    map.setView(startLatLng, 6);

    // Supprimer les anciens marqueurs s'ils existent
    if (startMarker) {
        map.removeLayer(startMarker);
    }
    if (destinationMarker) {
        map.removeLayer(destinationMarker);
    }

    // Ajouter des nouveaux marqueurs pour le départ et la destination
    startMarker = L.marker(startLatLng).addTo(map).bindPopup('Point de départ');
    destinationMarker = L.marker(destinationLatLng).addTo(map).bindPopup('Point d\'arrivée');
}

// Fonction pour afficher les itinéraires prédéfinis
function showItinerary(itinerary) {
    var startLatLng, destinationLatLng;

    // Sélectionner les coordonnées en fonction de l'itinéraire choisi
    switch (itinerary) {
        case 'Montpellier - Paris':
            startLatLng = [43.611015, 3.877016]; // Coordonnées de Montpellier
            destinationLatLng = [48.8566, 2.3522]; // Coordonnées de Paris
            break;
        case 'Marseille - Toulouse':
            startLatLng = [43.2965, 5.3698]; // Coordonnées de Marseille
            destinationLatLng = [43.6047, 1.4442]; // Coordonnées de Toulouse
            break;
        // Ajoute d'autres cas pour les itinéraires supplémentaires
    }

    // Centrer la carte sur le point de départ
    map.setView(startLatLng, 6);

    // Supprimer les anciens marqueurs s'ils existent
    if (startMarker) {
        map.removeLayer(startMarker);
    }
    if (destinationMarker) {
        map.removeLayer(destinationMarker);
    }

    // Ajouter des nouveaux marqueurs pour le départ et la destination
    startMarker = L.marker(startLatLng).addTo(map).bindPopup('Point de départ');
    destinationMarker = L.marker(destinationLatLng).addTo(map).bindPopup('Point d\'arrivée');
}

// Fonction pour initialiser la carte dès le chargement de la page
function initMap() {
    // Créer une carte avec Leaflet
    map = L.map('map').setView([43.611015, 3.877016], 12);

    // Ajouter une couche de tuiles OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
}

// Appeler la fonction d'initialisation de la carte au chargement de la page
window.onload = initMap;