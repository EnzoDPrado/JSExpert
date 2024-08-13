class TextProcessorFluentAPI {
  #content;
  constructor(content) {
    this.#content = content;
  }

  extractPeopleDate() {
    const matchPerson =
      /(?<=[contratante|contratada]:\s{1})(?!\s)(.¨*\n*?)$/gim;
    const onlyPerson = this.#content.match(matchPerson);
    this.#content = onlyPerson;
    return this;
  }

  build() {
    return this.#content;
  }
}

module.exports = TextProcessorFluentAPI;
