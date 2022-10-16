const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
 function calculateHanoi(disks, stepsPerHour) {
  const SECONDS_PER_HOUR = 3600;
  const stepsPerSecond = stepsPerHour / SECONDS_PER_HOUR;
  const stepsToSolve = 2 ** disks - 1;
  const secondsToSolve = Math.floor(stepsToSolve / stepsPerSecond);

  return {
    turns: stepsToSolve,
    seconds: secondsToSolve,
  };
}

module.exports = {
  calculateHanoi
};
