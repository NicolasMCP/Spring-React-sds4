package infodata.io.github.nicolasmcp.vendasweb.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import infodata.io.github.nicolasmcp.vendasweb.dto.SaleSumDTO;
import infodata.io.github.nicolasmcp.vendasweb.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{

	@Query("SELECT new infodata.io.github.nicolasmcp.vendasweb.dto.SaleSumDTO(obj.seller, SUM(obj.amount)) "
			+ " FROM Sale AS obj GROUP BY obj.seller")
	List<SaleSumDTO> amountGroupedBySeller();
}
