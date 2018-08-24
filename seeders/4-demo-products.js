'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products',
      [
        /*-------------------- 3. SMARTPHONE -------------------------*/
        {
          name: 'Xiaomi Redmi Note 5',
          description: '4GB RAM 64GB ROM Dual Rear Cameras Bluetooth 5.0 Fingerprint Recognition 4000mAh Battery',
          price: 50000,
          picture: 'redminote5.jpg',
          categoryId: 3,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'HUAWEI Honor 10',
          description: '4GB RAM 128GB ROM 20.0MP + 16.0MP Rear Camera',
          price: 100000,
          picture: 'honor10.jpg',
          categoryId: 3,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'Samsung Galaxy Mega',
          description: '4GB RAM 64GB ROM Dual Rear Cameras Bluetooth 5.0 Fingerprint Recognition 4000mAh Battery',
          price: 60000,
          picture: 'samsunggalaxymega.jpg',
          categoryId: 3,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'Oukitel K4000 Plus',
          description: '13MP Smartphone MTK6737 5.0" HD Quad Core 1.3GHz Mobile phone 2GB RAM 16GB ROM 4100mAh 4G LTE',
          price: 20000,
          picture: 'OukitelK4000.jpg',
          categoryId: 3,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'Nokia6 ',
          description: 'Android 7 Snapdragon 630 Octa core 5.5" 16.0MP 3000mAh 4G RAM 32G ROM',
          price: 60000,
          picture: 'nokia6.jpeg',
          categoryId: 3,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'Apple iPhone 7 32GB',
          description: 'Model Number: A1778. 128GB UNLOCKED. IOS: 10.3.3.',
          price: 20000,
          picture: 'iphone7.jpg',
          categoryId: 3,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'ASUS Zenfone 5',
          description: 'Android 7 Snapdragon 630 Octa core 5.5" 16.0MP 3000mAh 4G RAM 32G ROM',
          price: 60000,
          picture: 'asuszenfone5.jpg',
          categoryId: 3,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },

        /*------------------ 4. Basic phone -----------------------*/
        {
          name: 'Nokia 3310',
          description: '2.4 inch screen 320x240 2MP mobile phone GSM 1200mAh Dual SIM nokia phone',
          price: 20000,
          picture: 'nokia3310.jpg',
          categoryId: 4,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'Ericsson t10',
          description: 'Wap',
          price: 300000,
          picture: 'ericssont10.jpg',
          categoryId: 4,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        /*------------------ 5. Landline telephone -----------------------*/
        {
          name: 'RCA 25425RE1',
          description: 'Wap',
          price: 3500,
          picture: 'RCA254.jpg',
          categoryId: 5,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },

        /*------------------ 7. Television -----------------------*/
        {
          name: '32HD5506.jpeg',
          description: 'SMART LED, 81cm, 300 PPI, HD ready, DVB-T2/S2/C, H.265/HEVC, Dual Core, 2x HDMI, USB, CI+, LAN, DLNA, WiFi, Miracast, Netflix, YouTube,',
          price: 60000,
          picture: '32HD5506.jpeg',
          categoryId: 7,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'LG 32LJ510U',
          description: '13MP Smartphone MTK6737 5.0" HD Quad Core 1.3GHz Mobile phone 2GB RAM 16GB ROM 4100mAh 4G LTE',
          price: 55000,
          picture: 'LG32LJ510U.jpeg',
          categoryId: 7,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'Samsung UE40MU6172',
          description: 'Android 7 Snapdragon 630 Octa 16.0MP 3000mAh 4G RAM 32G ROM',
          price: 150000,
          picture: 'SamsungUE40MU6172.jpeg',
          categoryId: 7,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'Hyundai ULS 65TS300',
          description: 'SMART LED, 165 cm, 4K Ultra HD, 800 Hz, DVB-T2/S2/C, H.265/HEVC, 2x HDMI, 2x USB, SCART, LAN, DLNA, MIRACAST, WiFi, HbbTV,',
          price: 260000,
          picture: 'HyundaiULS65TS300.jpeg',
          categoryId: 7,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'Sony Bravia KD-55XE8596',
          description: '13MP Smartphone MTK6737 5.0" HD Quad Core 1.3GHz Mobile phone 2GB RAM 16GB ROM 4100mAh 4G LTE',
          price: 200000,
          picture: 'SonyBraviaKD-55XE8596.jpeg',
          categoryId: 7,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'Samsung UE43MU6102',
          description: 'Android 7 Snapdragon 630 Octa core 5.5" 16.0MP 3000mAh 4G RAM 32G ROM',
          price: 150000,
          picture: 'SamsungUE43MU6102.jpeg',
          categoryId: 7,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        /*------------------ 8. DVD player -----------------------*/
        {
          name: 'Samsung BD-JM57',
          description: 'Wi-Fi, DTS surround',
          price: 42000,
          picture: 'samsungBD-JM57.jpeg',
          categoryId: 8,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'Sony BDP-S3700',
          description: '1080p, Built-in 2.4ghz Wi-fi, Super-quick Start',
          price: 34000,
          picture: 'SonyBDP-S3700.jpeg',
          categoryId: 8,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'Sony BDP-S1700',
          description: 'Plays Back Cd/dvd+/-r/dvd+rw/dvd/cd-r/bd-re Blu-ray',
          price: 21000,
          picture: 'SonyBDP-S3700.jpeg',
          categoryId: 8,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'Sony BDP-S5700',
          description: '1080p, 10/100 Ethernet',
          price: 66000,
          picture: 'SonyBDP-S5700.jpeg',
          categoryId: 8,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        /*------------------ 9. Digital camera -----------------------*/
        {
          name: 'GoPro Hero',
          description: '2-inch touch screen, Voice control',
          price: 60000,
          picture: 'gopro.jpeg',
          categoryId: 9,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'Canon Black EOS Rebel T6 EF-S',
          description: '18 megapixel, 18-55mm zoom lens, 3" LCD screen',
          price: 110000,
          picture: 'canonT6.jpeg',
          categoryId: 9,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'KODAK PIXPRO AZ252',
          description: '6 megapixel, 24-600mm zoom lens, 3" LCD screen',
          price: 80000,
          picture: 'kodakpixpro.jpeg',
          categoryId: 9,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'Nikon Silver COOLPIX P900',
          description: '16 megapixel, NIKKOR 4.3-357mm zoom lens',
          price: 100000,
          picture: 'nikonsilver.jpeg',
          categoryId: 9,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        /*------------------ 10. Video camera -----------------------*/
        {
          name: 'Vivitar Black DVR508',
          description: '1.8" preview screen',
          price: 30000,
          picture: 'vivitardvr508.jpeg',
          categoryId: 10,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'Bell+Howell DV200HD',
          description: 'belldv200hd.jpeg',
          price: 22000,
          picture: 'belldv200hd.jpeg',
          categoryId: 10,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        
        /*------------------ 12. MP3 player -----------------------*/
        {
          name: 'Ematic 8GB',
          description: '8GB hard drive stores up to 2,285 songs',
          price: 6000,
          picture: 'ematic.jpeg',
          categoryId: 12,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        
        /*------------------ 13. Home cinema system -----------------------*/
        {
          name: 'beFree Sound 5.1',
          description: '5.25" Amplifier + 3" Speakers x5, Output power:30W+10W*5  ',
          price: 40000,
          picture: 'beFreeSound.jpeg',
          categoryId: 13,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'LG BH5140S',
          description: '3D home theater system with 500W total output power',
          price: 89000,
          picture: 'LGBH5140S.jpeg',
          categoryId: 13,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'Philips HTS3541',
          description: '3D home theater system',
          price: 77000,
          picture: 'philips51.jpeg',
          categoryId: 13,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'Samsung HT-J4100',
          description: 'Dolby Digital/Digital Plus/True HD sound',
          price: 74000,
          picture: 'samsungj4100.jpeg',
          categoryId: 13,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        /*------------------ 14. Headphone -----------------------*/
        {
          name: 'KOSS 192980',
          description: 'oss over-the-ear headphones are comfortable to wear',
          price: 6000,
          picture: 'koss192980.jpeg',
          categoryId: 14,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'JVC HAV570',
          description: 'Open-air style headphones with super bass sound system',
          price: 9000,
          picture: 'jvchav570.jpeg',
          categoryId: 14,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'Maxell 190265',
          description: 'Extra-large 40mm drivers for deep bass sound',
          price: 11000,
          picture: 'maxell190265.jpeg',
          categoryId: 14,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        
        /*------------------ 15. Wireless speaker -----------------------*/
        {
          name: 'Braven BRV-1',
          description: 'The BRV-1 gives action sports and outdoor enthusiasts 12 hours ',
          price: 9000,
          picture: 'BravenBRV1.jpeg',
          categoryId: 15,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'Photive M90',
          description: 'Dolby Sound',
          price: 11000,
          picture: 'PhotiveM90.jpeg',
          categoryId: 15,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        /*------------------ 17. Laptop -----------------------*/
        {
          name: 'Lenovo ideapad 330s 15.6"',
          description: 'Thinner & lighter with narrow bezels for broader viewing, it boasts state-of-the-art processing and accelerated graphics performance as well as a redesigned keyboard. ',
          price: 125000,
          picture: 'lenovo330s',
          categoryId: 17,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'HP Pavilion 15-cs0051wm',
          description: 'Sleek. Slender. Sophisticated.',
          price: 200000,
          picture: 'hpcs0051.jpeg',
          categoryId: 17,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'Dell E5440 14"',
          description: 'The Dell E5440 14" Laptop runs on Windows 10 Pro. An Intel Core i3-4010U processor powers through everyday tasks.',
          price: 50000,
          picture: 'delle5540.jpeg',
          categoryId: 17,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'Dell G5 Gaming Laptop 15.6"',
          description: '15.6-inch FHD (1920 x 1080) IPS Anti-Glare, LED-Backlit Display',
          price: 220000,
          picture: 'DellG5.jpeg',
          categoryId: 17,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'Lenovo Gaming Laptop 15.6",',
          description: 'Powered by 7th Gen Intel Core processors and NVIDIA GTX 1050 discrete graphics, and featuring premium audio, its ready for action.',
          price: 125000,
          picture: 'lenovogaming.jpeg',
          categoryId: 17,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'Acer Aspire 5 A515-51-563W, 15.6"',
          description: 'Acer pioneers only the extraordinary gaming machines for your gaming pleasure. ',
          price: 135000,
          picture: 'AcerAspire.png',
          categoryId: 17,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'Msi GP63 Leopard',
          description: 'Performance Gaming Laptop i7-8750H (6 cores) GTX 1060 6G, 16GB 256GB + 1TB, 15.6"',
          price: 400000,
          picture: 'MsiGP63Leopard.jpeg',
          categoryId: 17,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'HP Pavilion 15.6" Gaming Laptop',
          description: 'ntel Core i5-8300H, NVIDIA GeForce GTX 1050 Ti 4GB GPU, 8GB RAM, 16 GB Intel Optane + 1TB HDD Storage',
          price: 220000,
          picture: 'hpgaming.jpeg',
          categoryId: 17,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        /*------------------ 18. Tablet -----------------------*/
        {
          name: 'Apple iPad (5th Generation) 128GB',
          description: 'The 9.7-inch iPad delivers the revolutionary iPad experience at an even more affordable price. ',
          price: 77000,
          picture: 'ipad5.jpeg',
          categoryId: 18,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'Samsung Galaxy Tab A -10.1"',
          description: ' Android 6.0 (Marshmallow) - 16 GB - 10.1" TFT (1920 x 1200) - microSD slot',
          price: 60000,
          picture: 'galaxyTab.jpeg',
          categoryId: 18,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'RCA Voyager 7"',
          description: '16GB Tablet Android 6.0 (Marshmallow)',
          price: 20000,
          picture: 'rcaV7.jpeg',
          categoryId: 18,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'SmarTab 7” Android 7.1',
          description: 'HD display, Quad-core processor & 16GB Storage',
          price: 26000,
          picture: 'smartab7.jpeg',
          categoryId: 18,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        /*------------------ 19. Console -----------------------*/
        {
          name: 'Microsoft Xbox One',
          description: '500GB Console White Slim',
          price: 66000,
          picture: 'xbox.jpeg',
          categoryId: 19,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'Sony PlayStation 4 Slim',
          description: '1TB Gaming Console, Black, CUH-2115B',
          price: 100000,
          picture: 'ps4.jpeg',
          categoryId: 19,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        /*------------------ 20. Personal Computer -----------------------*/
        {
          name: 'HP Slim 270-p013wb',
          description: '21.5" Monitor Bundle, Intel Pentium G4560T',
          price: 50000,
          picture: 'hpslim.jpeg',
          categoryId: 20,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'HP Pavilion 570-p013wb',
          description: '23" Monitor Bundle, Intel Core i3-7100',
          price: 90000,
          picture: 'hppavillon',
          categoryId: 20,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'HP Pavilion Desktop Tower',
          description: 'Intel Core i7-7700 , 16GB Memory',
          price: 200000,
          picture: 'hptower.jpeg',
          categoryId: 20,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        /*------------------ 21. Monitor -----------------------*/
        {
          name: 'HP 27er',
          description: '27-Inch 16:9 IPS LED Backlit 1920 x 1080',
          price: 63000,
          picture: 'hp27er.jpeg',
          categoryId: 21,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'LG 29UM59A-P',
          description: '29-Inch IPS WFHD (2560 x 1080) Ultrawide',
          price: 67000,
          picture: 'lg29.jpeg',
          categoryId: 21,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'ELEMENT E1SW2418M',
          description: 'Full HD (1080P) LED ',
          price: 49000,
          picture: 'element.jpeg',
          categoryId: 21,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'Dell 4K S2817Q',
          description: '28 Ultra HD 4K Monitor',
          price: 140000,
          picture: 'dell4k.jpeg',
          categoryId: 21,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        /*------------------ 22. Hardver -----------------------*/
        {
          name: 'Logitech G502',
          description: 'Proteus Spectrum RGB Turntable Gaming Mouse',
          price: 25000,
          picture: 'g502.jpeg',
          categoryId: 22,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'Razer DeathAdder Expert',
          description: 'Ergonomic PC Gaming Mouse with 6400 DPI Optical Sensor',
          price: 21000,
          picture: 'deathadder.jpeg',
          categoryId: 22,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'Ktaxon 5500DPI',
          description: 'USB 2.0 Wired Gaming Mouse Backlight Illuminated',
          price: 6000,
          picture: 'ktaxon.jpeg',
          categoryId: 22,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'Colorful GeForce GTX 1050 Ti',
          description: 'Mini OC 4GB GDDR5 Graphics Card',
          price: 66000,
          picture: 'gx1050.jpeg',
          categoryId: 22,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'MSI GTX 1080 TI',
          description: 'GeForce GTX graphics cards are the most advanced ever created.',
          price: 190000,
          picture: 'gtx1080.jpeg',
          categoryId: 22,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'MSI Motherboard Z370',
          description: 'Supports 8th Gen Intel Core / Pentium / Celeron processors for LGA 1151 socket',
          price: 44000,
          picture: 'msiz370.png',
          categoryId: 22,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'Gigabyte X470 AORUS',
          description: 'GigabyteX470.jpeg',
          price: 30000,
          picture: 'GigabyteX470.jpeg',
          categoryId: 22,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'MSI Motherboard B350M',
          description: 'supports DDR4-3200+(OC) memory, features 32Gbps NVMe M.2 slot',
          price: 33000,
          picture: 'msib350m.jpeg',
          categoryId: 22,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        /*------------------ 24. Microwave -----------------------*/
        {
          name: 'Hamilton Beach',
          description: 'Microwave oven with black housing and white painted cavity',
          price: 19000,
          picture: 'hambeach.jpeg',
          categoryId: 24,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'Emerson 1.2',
          description: '1100 W Microwave with Grill',
          price: 22000,
          picture: 'emerson12.jpeg',
          categoryId: 24,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'Oster 1.3',
          description: 'Microwave Oven with Grill, Mirror Finish',
          price: 22000,
          picture: 'oster13.jpeg',
          categoryId: 24,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        /*------------------ 25. Refrigerator -----------------------*/
        {
          name: 'Danby 4.7',
          description: '2-door refrigerator in Stainless Look',
          price: 60000,
          picture: 'danby47.jpeg',
          categoryId: 25,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'Samsung RH25H5611SR',
          description: 'Side By Side Food ShowCase Refrigerator with 24.5 cu. ',
          price: 260000,
          picture: 'RH25H5611SR.jpeg',
          categoryId: 25,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'HRQ 16N3BGS',
          description: 'Capacity Counter Depth Sabbath Mode Forced Air Cooling LED Lighting and Quick Chill',
          price: 170000,
          picture: 'hrq.jpeg',
          categoryId: 25,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        /*------------------ 26. Dishwasher -----------------------*/
        {
          name: 'Sunpentown XZRD-44',
          description: '18" Built-In Dishwasher',
          price: 96000,
          picture: 'xzrd44.jpeg',
          categoryId: 26,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'Danby KRX-12',
          description: 'Console Dishwasher with 6 Wash Cycles 4 Temperature',
          price: 77000,
          picture: 'krx12.jpeg',
          categoryId: 26,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'Bosch SHE3AR7',
          description: 'Built-In Dishwasher with Recessed Handle and Express Wash - Ascenta Series',
          price: 120000,
          picture: 'she3ar7.jpeg',
          categoryId: 26,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'Sunpentown XDK-24',
          description: 'Time Delay Feature allows you to program operation at a later start time (1-24 hours)',
          price: 78000,
          picture: 'xdk24.jpeg',
          categoryId: 26,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        /*------------------ 27. Washing machine -----------------------*/
        {
          name: 'Midea 25-x',
          description: 'Portable Washing Machine with Dryer Combo',
          price: 150000,
          picture: '25x.jpeg',
          categoryId: 27,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'Magic Chef cl-787',
          description: 'Compact Electric Dryer, White',
          price: 80000,
          picture: 'cl-787.jpeg',
          categoryId: 27,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'Samsung SPWD2200',
          description: '11bautomatic wash cycles provide optimal care for a variety of fabrics',
          price: 130000,
          picture: 'SPWD2200.jpeg',
          categoryId: 27,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'LG 41302',
          description: 'Front Load Washer with Steam',
          price: 112000,
          picture: '41302.jpeg',
          categoryId: 27,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        /*------------------ 28. Kitchen appliances -----------------------*/
        {
          name: 'Keurig® K-Mini',
          description: 'offee Maker Single-Serve K-Cup Pod K15 Brewer, Black',
          price: 25000,
          picture: 'kmini.jpeg',
          categoryId: 28,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'Hamilton Beach 2',
          description: '2 ways to brew: single cup or full 12-cup glass carafe',
          price: 33000,
          picture: 'beach2.jpeg',
          categoryId: 28,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'Ninja Express',
          description: 'Food Chopper',
          price: 9000,
          picture: 'ninja2.jpeg',
          categoryId: 28,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'Proctor Silex',
          description: 'Mini Food Chopper',
          price: 11000,
          picture: 'ProctorSilex.jpeg',
          categoryId: 28,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        /*------------------ 29. Other household appliances -----------------------*/
        {
          name: 'Todopost',
          description: 'To do todo',
          price: 88888,
          picture: 'todopost.jpg',
          categoryId: 29,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'Duracell 1.5V',
          description: 'oppertop Alkaline AA Batteries, 8 Pack',
          price: 1000,
          picture: 'duracell.png',
          categoryId: 29,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'Mainstays lamp',
          description: 'White Grab and Go Stick Lamp with USB Port',
          price: 6000,
          picture: 'Mainstays.jpeg',
          categoryId: 29,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'Westclox 32897BF',
          description: 'Round Butterfly Wall Clock- Home Decor',
          price: 60000,
          picture: '32897BF.jpeg',
          categoryId: 29,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
/*------------------ 30. Most popular items -----------------------*/
        {
          name: 'Nokia6 ',
          description: 'Android 7 Snapdragon 630 Octa core 5.5" 16.0MP 3000mAh 4G RAM 32G ROM',
          price: 60000,
          picture: 'nokia6.jpeg',
          categoryId: 30,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'Samsung BD-JM57',
          description: 'Wi-Fi, DTS surround',
          price: 42000,
          picture: 'samsungBD-JM57.jpeg',
          categoryId: 30,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'Microsoft Xbox One',
          description: '500GB Console White Slim',
          price: 66000,
          picture: 'xbox.jpeg',
          categoryId: 30,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'Dell G5 Gaming Laptop 15.6"',
          description: '15.6-inch FHD (1920 x 1080) IPS Anti-Glare, LED-Backlit Display',
          price: 220000,
          picture: 'DellG5.jpeg',
          categoryId: 30,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'Samsung UE40MU6172',
          description: 'Android 7 Snapdragon 630 Octa 16.0MP 3000mAh 4G RAM 32G ROM',
          price: 150000,
          picture: 'SamsungUE40MU6172.jpeg',
          categoryId: 30,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'Samsung Galaxy Mega',
          description: '4GB RAM 64GB ROM Dual Rear Cameras Bluetooth 5.0 Fingerprint Recognition 4000mAh Battery',
          price: 60000,
          picture: 'samsunggalaxymega.jpg',
          categoryId: 30,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'Photive M90',
          description: 'Dolby Sound',
          price: 11000,
          picture: 'PhotiveM90.jpeg',
          categoryId: 30,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
        {
          name: 'LG 29UM59A-P',
          description: '29-Inch IPS WFHD (2560 x 1080) Ultrawide',
          price: 67000,
          picture: 'lg29.jpeg',
          categoryId: 30,
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
