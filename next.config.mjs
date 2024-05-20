import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import path from 'path';

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withVanillaExtract(nextConfig);
