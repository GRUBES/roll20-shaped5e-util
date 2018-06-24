/**
 * Methods and constants for working with Skills on the 5e Shaped Character sheet
 *
 * @module shaped5e/skills
 *
 * @author Eric T Grubaugh
 * @copyright 2018 Zone & Co
 * @license MIT
 */

// Enumerates skills using their sheet IDs
const Attributes = {
    STR: "strength",
    DEX: "dexterity",
    CON: "constitution",
    INT: "intelligence",
    WIS: "wisdom",
    CHA: "charisma"
};

// Enumerates attributes of skills
// XXX Annoying name, but stays consistent with skill module
const AttributeAttributes = {
    SCORE: "", // 19
    MOD: "mod", // 4
    FORMULA: "formula", // {{d20=1}} {{roll1=<inlineroll>}}
    CHECK: "check_mod", // 4
    CHECK_WITH_SIGN: "check_mod_with_sign" // +4
};

function attributeScore(character, attr) {
    return getAttrByName(character, attr);
}

function attributeModifier(character, attr) {
    return getAttrByName(character, `${attr}_${AttributeAttributes.MOD}`);
}

function attributeModifierSigned(character, attr) {
    return getAttrByName(character, `${attr}_${AttributeAttributes.CHECK_WITH_SIGN}`);
}

export {
    /**
     * Enumeration of the 5e Attributes
     *
     * @enum {String}
     * @readonly
     *
     * @since 0.2.0
     */
    Attributes,
    /**
     * Gets the score of the given attribute for the given character
     *
     * @param character {Character} The Character Object to read
     * @param attr {Attributes} The Attribute to read
     *
     * @returns {Number} The attribute score
     *
     * @example
     * attributeScore(myChar, Attributes.WIS); // <= 19
     * attributeScore(myChar, Attributes.INT); // <= 7
     *
     * @function
     * @since 0.2.0
     *
     * @see https://wiki.roll20.net/API:Objects#Character
     */
    attributeScore,
    /**
     * Gets the modifier of the given attribute for the given character
     *
     * @param character {Character} The Character Object to read
     * @param attr {Attributes} The Attribute to read
     *
     * @returns {Number} The attribute modifier
     *
     * @example
     * attributeModifier(myChar, Attributes.WIS); // <= 4
     * attributeModifier(myChar, Attributes.INT); // <= -2
     *
     * @function
     * @since 0.2.0
     *
     * @see https://wiki.roll20.net/API:Objects#Character
     */
    attributeModifier,
    /**
     * Gets the modifier of the given attribute for the given character, including the sign
     *
     * @param character {Character} The Character Object to read
     * @param attr {Attributes} The attribute to read
     *
     * @returns {String} The attribute modifier and its sign
     *
     * @example
     * attributeModifier(myChar, Attributes.WIS); // <= "+4"
     * attributeModifier(myChar, Attributes.INT); // <= "-2"
     *
     * @function
     * @since 0.2.0
     *
     * @see https://wiki.roll20.net/API:Objects#Character
     */
    attributeModifierSigned
}