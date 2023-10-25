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

import type {
  INode,
  INodeWritableProps,
  RendererMain,
} from '@lightningjs/renderer';

export class Component {
  readonly node: INode;

  constructor(
    readonly renderer: RendererMain,
    nodeProps: Partial<INodeWritableProps>,
  ) {
    this.node = renderer.createNode({
      ...nodeProps,
    });
  }

  get x() {
    return this.node.x;
  }

  set x(x: number) {
    this.node.x = x;
  }

  get y() {
    return this.node.y;
  }

  set y(y: number) {
    this.node.y = y;
  }

  get width() {
    return this.node.width;
  }

  set width(width: number) {
    this.node.width = width;
  }

  get height() {
    return this.node.height;
  }

  set height(height: number) {
    this.node.height = height;
  }
}
