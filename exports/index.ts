/*
 * If not stated otherwise in this file or this component's LICENSE file the
 * following copyright and licenses apply:
 *
 * Copyright 2023 Comcast Cable Communications Management, LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Lightning 3 Renderer API
 *
 * @remarks
 * This module exports the API for the Lightning 3 Renderer. You
 * can import the exports from this module like so:
 * ```ts
 * import { Renderer } from '@lightning/renderer';
 * ```
 *
 * Generally developers/frameworks using the Renderer will use the Main API to
 * render applications.
 *
 * Do not confuse the Main API with the Core API which is used to extend
 * capabilities of the Renderer. The Main API code always runs from the main
 * thread.
 *
 * @module
 */

export * from '../src/core/CoreNode.js';
export * from '../src/core/CoreTextNode.js';
export * from '../src/main-api/Renderer.js';
export * from '../src/common/IAnimationController.js';
export * from '../src/common/CommonTypes.js';

// Selected types exported from the Core Renderer that can be used in the
// context of the main API.
export type { TextureMap } from '../src/core/CoreTextureManager.js';
export type { ShaderMap, EffectMap } from '../src/core/CoreShaderManager.js';
export type { TextRendererMap } from '../src/core/text-rendering/renderers/TextRenderer.js';
export type { TrFontFaceMap } from '../src/core/text-rendering/font-face-types/TrFontFace.js';
export type { AnimationSettings } from '../src/core/animations/CoreAnimation.js';
export type {
  EffectProps,
  FadeOutEffectProps,
  LinearGradientEffectProps,
  RadialGradientEffectProps,
  GrayscaleEffectProps,
  GlitchEffectProps,
  RadialProgressEffectProps,
} from '../src/core/CoreShaderManager.js';

// Shaders
export * from '../src/core/renderers/webgl/WebGlCoreShader.js';
export * from '../src/core/renderers/webgl/shaders/effects/ShaderEffect.js';

// Textures
export * from '../src/core/textures/Texture.js';

// Text Rendering & Fonts
export * from '../src/core/text-rendering/renderers/TextRenderer.js';
export * from '../src/core/text-rendering/renderers/CanvasTextRenderer.js';
export * from '../src/core/text-rendering/renderers/SdfTextRenderer/SdfTextRenderer.js';
export * from '../src/core/text-rendering/font-face-types/TrFontFace.js';
export * from '../src/core/text-rendering/font-face-types/WebTrFontFace.js';
export * from '../src/core/text-rendering/font-face-types/SdfTrFontFace/SdfTrFontFace.js';

// Stage (type only for Core Extensions)
export type * from '../src/core/Stage.js';
