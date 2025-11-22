package main

import (
	"fmt"
	"net/http"
)

func main() {
	//http.HandleFunc("/create-payment-intent", handleCreatePaymentIntent)

	var caughtValue string = returnsValue()

	fmt.Println(caughtValue)

}

func handleCreatePaymentIntent(writer http.ResponseWriter, request *http.Request) {
	fmt.Println("Endpoint Called")

}
func returnsValue() string {
	return "Hello World"
}
