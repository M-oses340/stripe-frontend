package testpackage

import "fmt"

func MyFunction(step int) {
	if step == 1 {
		fmt.Println("Step 1")

	} else if step == 2 {
		fmt.Println("Step 2")
	} else if step == 3 {
		fmt.Println("Step 3")
	} else if step == 4 {
		fmt.Println("Step 4")
	} else {
		fmt.Println("Step not supported")
	}

}
