import { range } from 'ramda';

const getNulls = (nFrames) => range(0, nFrames).map(_ => null);

/**
 * Add nFrames delay to the end of each line
 * @param {*} nFrames number of frames
 * @return {Function} concat lineChunks and range of nulls
 */
const addDelay = (nFrames) => lines => lines.concat(getNulls(nFrames));

export {
  addDelay
};
