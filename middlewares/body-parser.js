import { urlencoded, json } from "express";

const parseURL = urlencoded({ extended: true });
const parseJSON = json();

export { parseURL, parseJSON };
