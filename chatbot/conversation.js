/* The chat const defines the Peekobot conversation.
 * 
 * It should be an object with numerical property names, and each property is an entry
 * in the conversation.
 * 
 * A conversation entry should have:
 *  - A "text" property that is what the chatbot says at this point in the conversation
 *  - Either:
 *     - A "next" property, which defines the next chat entry by stating a numerical key
 *       of the chat object and is used when the chatbot needs to say several things
 *       without input from the user
 *    OR
 *     - An "options" property that defines the choices a user can take this is an
 *       array of option objects
 * 
 * An options object should have:
 *  - a "text" property that is the label for the user's choice
 *  AND EITHER
 *  - a "next" property that defines the next chat entry by stating a numerical key of
 *    the chat object and is used when the user selects this option
 *  OR
 *  - a "url" property that defines a link for the user to be taken to
 * 
 * A simple example chat object is:
 * const chat = {
 *     1: {
 *         text: 'Good morning sir',
 *         next: 2
 *     },
 *     2: {
 *         text: 'Would you like tea or coffee with your breakfast?',
 *         options: [
 *             {
 *                 text: 'Tea',
 *                 next: 3
 *             },
 *             {
 *                 text: 'Coffee',
 *                 next: 4
 *             }
 *         ]
 *     },
 *     3: {
 *         text: 'Splendid - a fine drink if I do say so myself.'
 *     },
 *     4: {
 *         text: 'As you wish, sir'
 *     }
 * }
 */
const chat = {
    1: {
        text: 'こんにちは。今日はどうしましたか？',
        options: [
            {
                text: 'AR体験したい',
                type: 'button',
                next: 2
            },
            {
                text: '製品情報を知りたい',
                type: 'button',
                next: 3
            },
            {
                text: '直接問合せしたい',
                type: 'button',
                next: 6
            },
        ]
    },
    2: {
        text: '体験する製品を選んでね。',
        options: [
            {
                text: '製品Ａ',
                type: 'button',
                next: 4
            },
            {
                text: '製品Ｂ',
                type: 'button',
                next: 4
            },
            {
                text: '製品Ｃ',
                type: 'button',
                next: 4
            },
        ]
    },
    3: {
        text: '知りたい製品をどうぞ。',
        options: [
            {
                text: '製品Ａ',
                type: 'button',
                next: 5
            },
            {
                text: '製品Ｂ',
                type: 'button',
                next: 5
            },
            {
                text: '製品Ｃ',
                type: 'button',
                next: 5
            },
        ]
    },
    4: {
        text: 'QRリーダーで読み込んでください。',
        options: [
            {
		        type: 'img',
		        src: "../img/qr_mvSample.png",
		        url: "../mvSample.html"
            }
        ]
    },
    5: {
        text: 'はいどうぞ',
        options: [
            {
                text: "クリックすると新しいタブで開きます",
                type: 'url',
                url: "../contact/index.html"
            }
        ]
    },
    6: {
        text: 'こちらから問合せできます。',
        options: [
            {
                text: "クリックすると新しいタブで開きます",
                type: 'url',
                url: "../contact/index.html"
            }
        ]
    }
};
