<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Testing\Fakes\Fake;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Alumno>
 */
class AlumnoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public static function dni(): string
    {
        $number=fake()->randomNumber(8, true); // Ensure 8-digit number
        $letters="TRWAGMYFPDXBNJZSQVHLCKE";

        $index=$number % 23; // Get position in letter sequence
        $letter=$letters[$index]; // Get corresponding letter

        return $number . $letter; // Return complete DNI
    }

    public function definition(): array
    {
        return [
            //
            "name"=>fake()->name(),
            "surname"=>fake()->lastName(),
            "address" =>fake()->address(),
            "email"=>fake()->email(),
            "dni" => self::dni(),
            "fnac" => fake()->date()
        ];
    }
}
