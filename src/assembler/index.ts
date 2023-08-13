import type { Architecture } from '../schema/architecture.d.ts'

export default function generateAssemblyFile(input:any, ref:Architecture):string {

    const output:Array<string> = []

    if (input == undefined) return "";
    if (input.modules == undefined) return "";
    if (!Array.isArray(input.modules)) return "";

    input.modules.forEach(element => {
        
        if (element == undefined) return;
        if (element.methods == undefined) return;
        if (!Array.isArray(element.methods)) return;

        element.methods.forEach(method => {

             output.push(
                generateAssemblyMethod(
                    method,
                    ref
                )
            );
            return

        })

    });

    return output.join('\n\n')

}

export function generateAssemblyMethod(method:any, ref:Architecture):string {

    let output = `.${method.name}\n`

    method.code.forEach(i => {

        const possible = ref.instructions.filter(j => j.type == i.type)

        output += `\t${possible[0].assembler}\n`;

        return

    })

    return output

}