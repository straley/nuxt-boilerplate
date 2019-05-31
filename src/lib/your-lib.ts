// import { SomeDependency } from 'some-dependency'

export type YourLibType = {
  id: string
  blah: number
}

export class YourLibClass {
  private def:YourLibType

  constructor(def: YourLibType) {
    this.def = def
  } 
}
