import { useRef } from "react"
import { translateFromClaude } from "../ai.js"

function Original() {

  const fromTextRef = useRef("")
  const toTextRef = useRef("")
  async function translate() {
    console.log(fromTextRef.current.value)
    const translated = await translateFromClaude(fromTextRef.current.value)
    toTextRef.current.value = translated

  }

  return (
    <>
      <h1>Teacher Jihan's Literal Translator</h1>
        <div className="instructions">このツールは、あなたが書いた英語の文を直訳で日本語に翻訳します。英語に間違いがあっても、そのままの形で日本語に訳します。つまり、文法の誤りや不自然な表現も残したまま日本語にするので、「どのように変な意味になるのか」を見ることができます。
        </div>
      <div className="container" translate="no">
        <div className="wrapper">
          <div className="text-input">
            <textarea spellCheck="false" ref={fromTextRef} className="from-text" placeholder="ここに英語の文を書いてください。" maxLength={150}></textarea>
            <textarea spellCheck="false" ref={toTextRef} readOnly className="to-text"
              placeholder="ここにあなたの文の直訳が表示されます"></textarea>
          </div>
        </div>

        <button onClick={translate}>Translate Text</button>
      </div>
    </>
  )
}

export default Original
