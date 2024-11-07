
import image1 from '../imgs/SB-510_04B_1800x1800.jpg';
import image2 from '../imgs/SB-510_04E_1800x1800.jpg';

import eye1 from '../imgs/SB-510_04B_1800x1800.jpg';
import eye2 from '../imgs/SB-510_04E_1800x1800.jpg';

import lips1 from '../imgs/SB-510_04B_1800x1800.jpg';
import lips2 from '../imgs/SB-510_04E_1800x1800.jpg';


import hair1 from '../imgs/SB-510_04B_1800x1800.jpg';
import hair2 from '../imgs/SB-510_04E_1800x1800.jpg';

import makeup1 from '../imgs/SB-510_04B_1800x1800.jpg';
import makeup2 from '../imgs/SB-510_04E_1800x1800.jpg';

import skin1 from '../imgs/SB-510_04B_1800x1800.jpg';
import skin2 from '../imgs/SB-510_04E_1800x1800.jpg';

import vanity1 from '../imgs/SB-510_04B_1800x1800.jpg';
import vanity2 from '../imgs/SB-510_04E_1800x1800.jpg';

import lights1 from '../imgs/SB-510_04B_1800x1800.jpg';
import lights2 from '../imgs/SB-510_04E_1800x1800.jpg';

import misc1 from '../imgs/SB-510_04B_1800x1800.jpg';
import misc2 from '../imgs/SB-510_04E_1800x1800.jpg';

const menuData = {
    mainMenu: ['Face', 'Eye', 'Lips', 'Hair', 'Makeup Tools', 'Skin', 'Vanity', 'Lights', 'Misc', 'Services'],
    Face: {
        heading: "FACE",
        options: {
            col1: ["Fixing Spray", "Highlighter", "Liquid Blush", "Blush Palette", "Contour", "Body Paints", "Primer", "Concealer Palette", "Foundation", "Loose Powder"],
            col2: ["Liquid Highlighter", "Blush", "Compact", "Cream Blush", "Cream Concealer", "Balm Foundation", "Liquid Concealer", "Bronzer", "Makeup Fixer", "Setting Spray"],
            col3: ["Foundation Stick", "Corrector", "Cream Contour", "Mixing Pigment", "Blotting Powder", "Baking Powder", "Face Primer", "Loose Highlighter", "Banana Powder", "Strobe Cream", "SFX"]
        },
        images: [
            { src: image1, description: "Best-selling makeup palette 1", link: "/shop1" },
            { src: image2, description: "Best-selling makeup palette 2", link: "/shop2" }
        ]
    },
    Eye: {
        heading: "EYE",
        options: {
            col1: ["Eyelashes", "Tweezer", "Lash Adhesive", "Brow Kit", "Glitter Glue", "EyePrimer", "Eyeshadow"],
            col2: ["Eye Pencil", "Lenses", "Brow Pomade", "Mascara", "Gel Liner", "Eye Pigments", "Liquid Eyeshadow"],
            col3: ["EyeLiner", "Brow Pencil", "Sketch Liner", "Brow Gel", "Lash Curler", "Kajal", "Pigment Primer"]
        },
        images: [
            { src: eye1, description: "Eye Description 1", link: "/shop1" },
            { src: eye2, description: "Eye Description 2", link: "/shop2" },
        ]
    },
    Lips: {
        heading: "LIPS",
        options: {
            col1: ["Lip Palette", "Lipstick", "Lip Gloss", "Lip Tints", "Liquid Lipstick", "Lip Sets"],
            col2: ["Lip Liner", "Lip Balm", "Lip Crayon", "Lip Primer", "Lip Oil", "Lip Blush"],
            col3: ["Lip Tattoo", "Lip Plumper", "Lip Crème", "Lip Maximizer", "Lip Pencils", "Lip Stains", "Lip Paint", "Matte Lipstick"]
        },
        images: [
            { src: lips1, description: "Lip Product 1", link: "/lipshop1" },
            { src: lips2, description: "Lip Product 2", link: "/lipshop2" }
        ]
    },
    Hair: {
        heading: "HAIR",
        options: {
            col1: ["Hair Brushes", "Tools", "Pin Organiser", "Combs", "Hair Accessories", "Hair Extensions", "Clip Extensions"],
            col2: ["Styling", "Hair Pins", "Practise", "Care", "Clips", "Hair Oil"],
            col3: ["Hair Vanity", "Essentials"]
        },
        images: [
            { src: hair1, description: "Hair Description 1", link: "/shop1" },
            { src: hair2, description: "Hair Description 2", link: "/shop2" },
        ]
    },
    'Makeup Tools': {
        heading: "MAKEUP TOOLS",
        options: {
            col1: ["Brushes", "Brush Cleanser", "Brush Set", "Eye Brushes", "Face Brushes", "Lip Brushes", "Brush Holder", "Cleansing Matt"],
            col2: ["Airbrush", "Cleanser", "Foundation", "Primer", "Loose Powder", "Highlighter", "Spaonge Puff", "Wedges"],
            col3: ["Powder Puff", "Sponge Beauty Blender", "Essentials", "Bindi", "Mixing Palette", "Fan", "Mirror", "Mixing Medium"],
            col4: ["Dummy", "Utility", "Cape", "Saftey Pin", "Tapes", "Clips", "Scissors", "Eyebrow Razor", "Sharpner", "Tika Glue", "Face Lifting", "Body Tape", "Makeup Chairs", "Depotting"]
        },
        images: [
            { src: makeup1, description: "makeup Description 1", link: "/shop1" },
            { src: makeup2, description: "Makeup Description 2", link: "/shop2" },
        ]
    },
    Skin: {
        heading: "SKIN",
        options: {
            col1: ["Face Mist", "Toner", "Face Rollers", "Moisturiser", "Mask", "Cleanser", "Wet Wipes", "Serum"],
            col2: ["Makeup Remover", "Exfoliator", "Sets", "Sunscreen", "Face Oil", "Scrub", "Eye Cream", "Lip Care"],
            col3: ["Essence", "Acne Patch", "Eye Patches", "Body Mist"]
        },
        images: [
            { src: skin1, description: "Skin Description 1", link: "/shop1" },
            { src: skin2, description: "Skin Description 2", link: "/shop2" },
        ]
    },
    Vanity: {
        heading: "VANITY",
        options: {
            col1: ["Hair Vanity", "Vanity / Organizer"]
        },
        images: [
            { src: vanity1, description: "Vanity Description 1", link: "/shop1" },
            { src: vanity2, description: "Vanity Description 2", link: "/shop2" },
        ]
    },
    Lights: {
        heading: "LIGHTS",
        options: {
            col1: ["Photography Lights", "Makeup Lights"]
        },
        images: [
            { src: lights1, description: "Light Description 1", link: "/shop1" },
            { src: lights2, description: "Light Description 2", link: "/shop2" },
        ]
    },
    Misc: {
        heading: "LIGHTS",
        options: {
            col1: ["Hair Pins", "10 Pair Affordable", "10 Pair Premium Lashes", "Premium Lashes", "Bindi", "Hair Extensions"]
        },
        images: [
            { src: misc1, description: "Misc Description 1", link: "/shop1" },
            { src: misc2, description: "Misc Description 2", link: "/shop2" },
        ]
    }
}

export default menuData;