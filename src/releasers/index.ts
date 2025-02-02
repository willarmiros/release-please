// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {ReleasePR} from '../release-pr';

import {Go} from './go';
import {GoYoshi} from './go-yoshi';
import {JavaBom} from './java-bom';
import {JavaLTS} from './java-lts';
import {JavaYoshi} from './java-yoshi';
import {KRMBlueprint} from './krm-blueprint';
import {Node} from './node';
import {PHP} from './php';
import {PHPYoshi} from './php-yoshi';
import {Python} from './python';
import {RubyYoshi} from './ruby-yoshi';
import {Ruby} from './ruby';
import {Simple} from './simple';
import {TerraformModule} from './terraform-module';
import {Rust} from './rust';
import {OCaml} from './ocaml';
import {Helm} from './helm';
import {Elixir} from './elixir';

// add any new releasers you create to this type as well as the `releasers`
// object below.
export type ReleaseType =
  | 'go'
  | 'go-yoshi'
  | 'java-bom'
  | 'java-lts'
  | 'java-yoshi'
  | 'krm-blueprint'
  | 'node'
  | 'ocaml'
  | 'php'
  | 'php-yoshi'
  | 'python'
  | 'ruby'
  | 'ruby-yoshi'
  | 'rust'
  | 'simple'
  | 'terraform-module'
  | 'helm'
  | 'elixir';

type Releasers = Record<ReleaseType, typeof ReleasePR>;

const releasers: Releasers = {
  go: Go,
  'go-yoshi': GoYoshi,
  'java-bom': JavaBom,
  'java-lts': JavaLTS,
  'java-yoshi': JavaYoshi,
  'krm-blueprint': KRMBlueprint,
  node: Node,
  ocaml: OCaml,
  php: PHP,
  'php-yoshi': PHPYoshi,
  python: Python,
  ruby: Ruby,
  'ruby-yoshi': RubyYoshi,
  rust: Rust,
  simple: Simple,
  'terraform-module': TerraformModule,
  helm: Helm,
  elixir: Elixir,
};

export function getReleasers(): Releasers {
  return releasers;
}

// deprecated, use getReleaserTypes
export function getReleaserNames(): string[] {
  return getReleaserTypes() as string[];
}

export function getReleaserTypes(): readonly ReleaseType[] {
  const names: ReleaseType[] = [];
  for (const releaseType of Object.keys(releasers)) {
    names.push(releaseType as ReleaseType);
  }
  return names;
}
