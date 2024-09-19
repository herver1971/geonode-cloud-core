from collections import OrderedDict

from .. import Provider as ColorProvider

localized = True


class Provider(ColorProvider):
    """Implement color provider for ``fr_FR`` locale."""

    all_colors = OrderedDict(
        (
            ("Noir", "#000000"),
            ("Gris mat", "#696969"),
            ("Gris", "#808080"),
            ("Gris foncé (Acier)", "#A9A9A9"),
            ("Gris argent", "#C0C0C0"),
            ("Gris clair", "#D3D3D3"),
            ("Gris gainsboro (Etain)", "#DCDCDC"),
            ("Blanc fumée", "#F5F5F5"),
            ("Blanc spectral", "#F8F8FF"),
            ("Blanc", "#FFFFFF"),
            ("Ivoire", "#FFFFF0"),
            ("Blanc floral", "#FFFAF0"),
            ("Blanc coquillage", "#FFF5EE"),
            ("Blanc lavande", "#FFF0F5"),
            ("Blanc dentelle", "#FDF5E6"),
            ("Blanc Lin", "#FAF0E6"),
            ("Rose brumeux", "#FFE4E1"),
            ("Rose", "#FFC0CB"),
            ("Rose clair", "#FFB6C1"),
            ("Rose Passion", "#FF69B4"),
            ("Rose profond", "#FF1493"),
            ("Violet pâle", "#DB7093"),
            ("Fushia (Magenta)", "#FF00FF"),
            ("Violet moyen", "#C71585"),
            ("Violet chardon", "#D8BFD8"),
            ("Prune", "#DDA0DD"),
            ("Violet", "#EE82EE"),
            ("Violet orchidée", "#DA70D6"),
            ("Violet orchidée moyen", "#BA55D3"),
            ("Violet orchidée foncé", "#9932CC"),
            ("Violet foncé", "#9400D3"),
            ("Bleu violet", "#8A2BE2"),
            ("Indigo", "#4B0082"),
            ("Bleu ardoise moyen", "#7B68EE"),
            ("Bleu ardoise", "#6A5ACD"),
            ("Bleu ardoise foncé", "#483D8B"),
            ("Pourpre moyen", "#9370DB"),
            ("Magenta foncé", "#8B008B"),
            ("Pourpre", "#800080"),
            ("Brun rosé", "#BC8F8F"),
            ("Corail clair", "#F08080"),
            ("Corail", "#FF7F50"),
            ("Tomate", "#FF6347"),
            ("Orangé", "#FF4500"),
            ("Rouge", "#FF0000"),
            ("Rouge cramoisi", "#DC143C"),
            ("Saumon clair", "#FFA07A"),
            ("Saumon Foncé", "#E9967A"),
            ("Saumon", "#FA8072"),
            ("Rouge Indien", "#CD5C5C"),
            ("Rouge brique", "#B22222"),
            ("Brun", "#A52A2A"),
            ("Rouge foncé", "#8B0000"),
            ("Bordeaux", "#800000"),
            ("Beige", "#F5F5DC"),
            ("Beige antique", "#FAEBD7"),
            ("Beige papaye", "#FFEFD5"),
            ("Amande", "#FFEBCD"),
            ("Bisque", "#FFE4C4"),
            ("Beige pêche", "#FFDAB9"),
            ("Beige mocassin", "#FFE4B5"),
            ("Jaune blanc navaro", "#FFDEAD"),
            ("Jaune blé", "#F5DEB3"),
            ("Brun bois rustique", "#DEB887"),
            ("Brun roux", "#D2B48C"),
            ("Brun sable", "#F4A460"),
            ("Orange", "#FFA500"),
            ("Orange foncé", "#FF8C00"),
            ("Chocolat", "#D2691E"),
            ("Brun pérou", "#CD853F"),
            ("Terre de Sienne", "#A0522D"),
            ("Brun cuir", "#8B4513"),
            ("Jaune clair", "#FFFFE0"),
            ("Jaune maïs doux", "#FFF8DC"),
            ("Jaune doré clair", "#FAFAD2"),
            ("Beige citron soie", "#FFFACD"),
            ("Jaune doré pâle", "#EEE8AA"),
            ("Brun kaki", "#F0E68C"),
            ("Jaune", "#FFFF00"),
            ("Or", "#FFD700"),
            ("Jaune doré", "#DAA520"),
            ("Jaune doré foncé", "#B8860B"),
            ("Brun kaki foncé", "#BDB76B"),
            ("Jaune vert", "#9ACD32"),
            ("Kaki", "#6B8E23"),
            ("Olive", "#808000"),
            ("Vert olive foncé", "#556B2F"),
            ("Vert jaune", "#ADFF2F"),
            ("Chartreuse", "#7FFF00"),
            ("Vert prairie", "#7CFC00"),
            ("Citron vert", "#00FF00"),
            ("Citron vert foncé", "#32CD32"),
            ("Blanc menthe", "#F5FFFA"),
            ("Miellat", "#F0FFF0"),
            ("Vert pâle", "#98FB98"),
            ("Vert clair", "#90EE90"),
            ("Vert printemps", "#00FF7F"),
            ("Vert printemps moyen", "#00FA9A"),
            ("Vert forêt", "#228B22"),
            ("Vert", "#008000"),
            ("Vert foncé", "#006400"),
            ("Vert océan foncé", "#8FBC8F"),
            ("Vert océan moyen", "#3CB371"),
            ("Vert océan", "#2E8B57"),
            ("Gris ardoise clair", "#778899"),
            ("Gris ardoise", "#708090"),
            ("Gris ardoise foncé", "#2F4F4F"),
            ("Bleu alice", "#F0F8FF"),
            ("Bleu azur", "#F0FFFF"),
            ("Cyan clair", "#E0FFFF"),
            ("Azurin", "#AFEEEE"),
            ("Aigue-marine", "#7FFFD4"),
            ("Aigue-marine moyen", "#66CDAA"),
            ("Cyan", "#00FFFF"),
            ("Turquoise", "#40E0D0"),
            ("Turquoise moyen", "#48D1CC"),
            ("Turquoise foncé", "#00CED1"),
            ("Vert marin clair", "#20B2AA"),
            ("Cyan foncé", "#008B8B"),
            ("Vert sarcelle", "#008080"),
            ("Bleu pétrole", "#5F9EA0"),
            ("Bleu poudre", "#B0E0E6"),
            ("Bleu clair", "#ADD8E6"),
            ("Bleu azur clair", "#87CEFA"),
            ("Bleu azur", "#87CEEB"),
            ("Bleu azur profond", "#00BFFF"),
            ("Bleu toile", "#1E90FF"),
            ("Bleu lavande", "#E6E6FA"),
            ("Bleu acier clair", "#B0C4DE"),
            ("Bleuet", "#6495ED"),
            ("Bleu acier", "#4682B4"),
            ("Bleu royal", "#4169E1"),
            ("Bleu", "#0000FF"),
            ("Bleu moyen", "#0000CD"),
            ("Bleu foncé", "#00008B"),
            ("Bleu marin", "#000080"),
            ("Bleu de minuit", "#191970"),
        )
    )

    safe_colors = (
        "noir",
        "bordeaux",
        "vert",
        "rouge",
        "violet",
        "sarcelle",
        "bleu",
        "argent",
        "gris",
        "jaune",
        "fuchsia",
        "cyan",
        "blanc",
    )
