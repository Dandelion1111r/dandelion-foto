# dandelion-foto

Raluca – Fotografie & Gestaltung · „Die Seele steckt im Detail“
https://foto.dandelion1111.de

## Seiten

| Datei | Inhalt |
|---|---|
| `index.html` | Start: Titel, Bild-Mosaik, drei Türen (Fotografie, Gestaltung, Dandelion 11:11) |
| `ueber-mich.html` | Über mich (Entwurf – in eigenen Worten anpassen) |
| `fotografie.html` | Galerie mit drei Kategorien + Vorher/Nachher |
| `gestaltung.html` | Fallstudie Dandelion 11:11, swa Mobil (in Arbeit), Print & Grafik |
| `journal.html` | Übersicht der Beiträge |
| `journal/vorlage.html` | Vorlage für neue Beiträge (endet immer mit „Das Detail“) |
| `kontakt.html` | Formular + Links |

Gestaltung: `assets/style.css` · Funktionen: `assets/main.js`.
Rosa gestrichelte Kästen (`class="platzhalter"`) markieren Stellen, an denen noch eigener Inhalt fehlt.

## Neues Foto in die Galerie

1. Foto (`.webp` oder `.jpg`, ca. 1500 px breit) in `galerie/` hochladen.
2. In `fotografie.html` eine `<figure>`-Zeile kopieren und anpassen.
3. `data-cat`: `menschen`, `details` oder `natur`. Detailfotos zusätzlich mit `class="is-detail"` markieren.

## Neuer Journal-Beitrag

1. `journal/vorlage.html` kopieren, z. B. `journal/2026-11-hinter-den-kulissen.html`.
2. Text, Bild und „Das Detail“ ausfüllen, `noindex` in `<meta name="robots">` auf `index, follow` ändern.
3. In `journal.html` eine Karte für den Beitrag ergänzen (Vorlage steht dort im Kommentar).
