/**
 * Methods and constants for working with Skills on the 5e Shaped Character sheet
 *
 * @module shaped5e/skills
 *
 * @author Eric T Grubaugh
 * @copyright 2018 Zone & Co
 * @license MIT
 */

// Prefix used when referencing any skill from the sheet
const skillPrefix = "repeating_skill";

// Enumerates skills using their sheet IDs
const Skills = {
    ACROBATICS: "-L67hi91EWtETP2YyZXZ",
    ANIMAL_HANDLING: "-L67hi92iZC9Mk9QirLz",
    ARCANA: "-L67hi92iZC9Mk9QirM-",
    ATHLETICS: "-L67hi92iZC9Mk9QirM0",
    DECEPTION: "-L67hi92iZC9Mk9QirM1",
    HISTORY: "-L67hi92iZC9Mk9QirM2",
    INSIGHT: "-L67hi92iZC9Mk9QirM3",
    INTIMIDATION: "-L67hi92iZC9Mk9QirM4",
    INVESTIGATION: "-L67hi92iZC9Mk9QirM5",
    MEDICINE: "-L67hi92iZC9Mk9QirM6",
    NATURE: "-L67hi92iZC9Mk9QirM7",
    PERCEPTION: "-L67hi92iZC9Mk9QirM8",
    PERFORMANCE: "-L67hi92iZC9Mk9QirM9",
    PERSUASION: "-L67hi92iZC9Mk9QirMA",
    RELIGION: "-L67hi92iZC9Mk9QirMB",
    SLEIGHT_OF_HAND: "-L67hi92iZC9Mk9QirMC",
    STEALTH: "-L67hi92iZC9Mk9QirMD",
    SURVIVAL: "-L67hi92iZC9Mk9QirME"
};

// Enumerates attributes of skills
const SkillAttributes = {
    NAME: "name", // Athletics
    PROFICIENCY: "proficiency", // {SkillProficiencies}
    FORMULA: "formula", // {{d20=1}} {{roll1=<inlineroll>}}
    TOTAL: "total", // 1
    TOTAL_WITH_SIGN: "total_with_sign" // +1
};

// Enumerates possible values for the proficiency attribute of a skill
const SkillProficiencies = {
    PROFICIENT: "proficient",
    UNPROFICIENT: "unproficient",
    EXPERTISE: "expertise"
};

// (Character -> Skills) -> String
// Returns the modifier of the given skill for the given character with its sign
function skillModifier(character, skill) {
    let attribute = "total_with_sign";
    return getAttrByName(character.id, `${skillPrefix}_${skill}_${attribute}`);
}

// (Character -> Skills) -> Boolean
function isProficient(character, skill) {
    let proficiency = getAttrByName(character.id, `${skillPrefix}_${skill}_${SkillAttributes.PROFICIENCY}`);
    return (_.contains([SkillProficiencies.PROFICIENT, SkillProficiencies.EXPERTISE], proficiency));
}

export {
    /**
     * Enumeration of the 5e Skills
     *
     * @enum {String}
     * @readonly
     *
     * @since 0.1.0
     */
    Skills,
    /**
     * Determines whether the given character is proficient in the given skill. A character is considered
     * proficient if they have either Proficiency or Expertise with the skill.
     *
     * @param character {Character} The Character Object to read
     * @param skill {Skills} The Skill to read
     *
     * @returns {Boolean} true if the character is proficient with the given skill; false otherwise
     *
     * @example
     * isProficient(myChar, Skills.PERCEPTION); // <= true
     * isProficient(myChar, Skills.NATURE); // <= false
     *
     * @function
     * @since 0.1.0
     *
     * @see https://wiki.roll20.net/API:Objects#Character
     */
    isProficient,
    /**
     * Gets the modifier of the given skill for the given character, including the sign
     *
     * @param character {Character} The Character Object to read
     * @param skill {Skills} The Skill to read
     *
     * @returns {String} The skill modifier and its sign
     *
     * @example
     * skillModifier(myChar, Skills.PERCEPTION); // <= "+4"
     * skillModifier(myChar, Skills.NATURE); // <= "-2"
     *
     * @function
     * @since 0.1.0
     *
     * @see https://wiki.roll20.net/API:Objects#Character
     */
    skillModifier
}