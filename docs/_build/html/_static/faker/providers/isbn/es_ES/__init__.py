from .. import Provider as ISBNProvider


class Provider(ISBNProvider):
    rules = {
        "978": {
            "84": [
                ("0000000", "0999999", 2),
                ("1000000", "1049999", 5),
                ("1050000", "1199999", 4),
                ("1200000", "1299999", 6),
                ("1300000", "1399999", 4),
                ("1400000", "1499999", 3),
                ("1500000", "1999999", 5),
                ("2000000", "6999999", 3),
                ("7000000", "8499999", 4),
                ("8500000", "8999999", 5),
                ("9000000", "9199999", 4),
                ("9200000", "9239999", 6),
                ("9240000", "9299999", 5),
                ("9300000", "9499999", 6),
                ("9500000", "9699999", 5),
                ("9700000", "9999999", 4),
            ],
            "13": [
                ("0000000", "0099999", 2),
                ("0100000", "5999999", 0),
                ("6000000", "6049999", 3),
                ("6050000", "6999999", 0),
                ("7000000", "7349999", 4),
                ("7350000", "8749999", 0),
                ("8750000", "8999999", 5),
                ("9000000", "9899999", 0),
                ("9900000", "9999999", 6),
            ],
        },
    }
