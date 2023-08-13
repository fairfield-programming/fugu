import generateAssemblyFile from "./assembler/index.ts"
import * as fs from "node:fs"

const input = {
    name: "Program Name",
    modules: [
        {
            name: "Module Name",
            methods: [
                {
                    name: "methodName",
                    parameters: [],
                    code: [
                        {
                            type: "PUSH_SR",
                            params: []
                        },
                        {
                            type: "BREAK",
                            params: []
                        }
                    ]
                }
            ]
        }
    ]
}


const ref = JSON.parse(fs.readFileSync('./data/6502.json', 'utf-8'));

console.log(generateAssemblyFile(input, ref))